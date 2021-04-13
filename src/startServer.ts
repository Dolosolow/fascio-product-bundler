import 'reflect-metadata';
import 'dotenv/config';
import { graphqlHTTP } from 'express-graphql';
import express, { Request } from 'express';
import session from 'express-session';
import cors from 'cors';
import Redis from 'ioredis';
import connectRedis from 'connect-redis';

import { createTypeormConn } from './utils/createTypeormConn';
import schema from './graphql/schema';

const RedisStore = connectRedis(session);
const redis = new Redis();

export const startServer = async () => {
  const app = express();

  app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

  app.use(
    session({
      store: new RedisStore({ client: redis }),
      name: 'qbctkn',
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24,
      },
    })
  );

  app.use(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema,
      context: ({ request }: { request: Request }) => ({
        redis,
        req: request,
      }),
    })
  );

  await createTypeormConn();

  app.listen(4000, () =>
    console.log(
      '\n🚀 server is running in the following urls:\n\nGraphQL:\thttp://localhost:4000/graphql\nAPI:\t\thttp://localhost:4000'
    )
  );

  return app;
};
