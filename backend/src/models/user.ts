import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize';
import bcrypt from 'bcrypt';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
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

export const createUser = (sequelize: Sequelize) => {
  return User.init(
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
      tableName: 'users'
    }
  );
};
