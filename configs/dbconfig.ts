import dotenv from "dotenv";
dotenv.config();

type DBConfig = {
  username: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: string | undefined;
  dialect: any;
};

type Configurations = {
  development: DBConfig;
  test: DBConfig;
  production: DBConfig;
};

const config: Configurations = {
  development: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
  },
  test: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: "database_test",
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
  },
  production: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: "database_production",
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
  },
};

export default config;
