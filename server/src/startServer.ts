import "reflect-metadata";
import "dotenv/config";
import { graphqlHTTP } from "express-graphql";
import express, { Request } from "express";
import connectRedis from "connect-redis";
import session from "express-session";
import cors from "cors";

import { createTypeormConn } from "./utils/createTypeormConn";
import { redis } from "./utils/createConnectRedis";
import schema from "./graphql/schema";

const RedisStore = connectRedis(session);

export const startServer = async () => {
  const app = express();

  app.use(cors({ credentials: true, origin: process.env.CLIENT_HOST }));

  app.set("trust proxy", 1);
  app.use(
    session({
      store: new RedisStore({ client: redis }),
      name: "qbctkn",
      secret: process.env.SESSION_SECRET!,
      resave: true,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: "none",
      },
    })
  );

  app.use(
    "/graphql",
    graphqlHTTP({
      graphiql: process.env.NODE_ENV === "production" ? false : true,
      schema,
      context: ({ request }: { request: Request }) => ({
        redis,
        req: request,
      }),
    })
  );

  await createTypeormConn();

  app.listen(process.env.PORT || 4000, () =>
    console.log(
      `\n🚀 server is running in the following urls:\n\n${
        process.env.NODE_ENV === "production"
          ? `https://fascio-server.herokuapp.com/graphql`
          : `http://localhost:${process.env.PORT || 4000}/graphql`
      }\n`
    )
  );

  return app;
};
