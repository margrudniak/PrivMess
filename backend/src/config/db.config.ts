import { Options } from 'sequelize';

export const config: Options = {
  host: 'localhost',
  username: 'postgres',
  password: '123',
  database: 'testdb',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
