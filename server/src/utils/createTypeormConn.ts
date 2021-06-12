import { createConnection, getConnectionOptions } from "typeorm";

export const createTypeormConn = async () => {
  let connectionOptions = await getConnectionOptions(process.env.NODE_ENV);

  if (process.env.DATABASE_URL) {
    connectionOptions = Object.assign(connectionOptions, { url: process.env.DATABASE_URL });
  }

  return createConnection({ ...connectionOptions, name: "default" });
};
