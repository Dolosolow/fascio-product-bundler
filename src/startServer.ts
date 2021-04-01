import 'reflect-metadata';
import 'dotenv/config';
import { graphqlHTTP } from 'express-graphql';
import express, { Request, Response } from 'express';

import { createTypeormConn } from './utils/createTypeormConn';
import schema from './graphql/schema';

export const startServer = async () => {
  const app = express();

  app.use(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema,
    })
  );

  app.use('/bctoken', (_: Request, res: Response) => {
    res.send('BCTOKEN page');
  });

  await createTypeormConn();

  app.listen(4000, () =>
    console.log(
      '\n🚀 server is running in the following urls:\n\nGraphql:\t\thttp://localhost:4000/graphql\nAPI:\t\thttp://localhost:4000'
    )
  );

  return app;
};
