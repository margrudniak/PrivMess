import { Sequelize } from 'sequelize';
import { config } from '../config';
import { createUser, User } from '../models';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: {},
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

export const db: {
  Sequelize?: typeof Sequelize;
  sequelize?: typeof sequelize;
  user?: typeof User;
} = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = createUser(sequelize);
