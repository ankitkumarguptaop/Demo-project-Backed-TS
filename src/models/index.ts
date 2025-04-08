import { Sequelize } from 'sequelize';
import { initUserModel, User } from './user';
import configObj from '../configs/dbconfig';

const config = configObj['development'];

// Initialize Sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password ?? undefined,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

// Initialize models
initUserModel(sequelize);

// Call associate methods if needed
User.associate?.({});

export { sequelize, User };
