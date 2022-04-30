import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute
} from 'sequelize';
import bcrypt from 'bcrypt';
import { sequelize } from '../db';
export class UserClass extends Model<
  InferAttributes<UserClass>,
  InferCreationAttributes<UserClass>
> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
  generateHash(password: string): NonAttribute<string> {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }
  validPassword(password: string): NonAttribute<boolean> {
    return bcrypt.compareSync(password, this.password);
  }
}

export const User = UserClass.init(
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
    sequelize,
    timestamps: false,
    tableName: 'users'
  }
);
