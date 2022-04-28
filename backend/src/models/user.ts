import { DataTypes, ModelDefined, Optional } from 'sequelize/types';
import bcrypt from 'bcrypt';

export interface UserAttributes {
  id: number;
  email: string;
  password: string;
}

export type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export const createUser = (sequelize) => {
  const User: ModelDefined<UserAttributes, UserCreationAttributes> = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: new DataTypes.STRING()
      },
      password: {
        type: new DataTypes.STRING()
      }
    },
    {
      tableName: 'users',
      instanceMethods: {
        generateHash: function (password: string) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
        },
        validPassword: function (password: string) {
          return bcrypt.compareSync(password, this.password);
        }
      }
    }
  );
  return User;
};
