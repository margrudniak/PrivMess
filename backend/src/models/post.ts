import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model
} from 'sequelize';
import { sequelize } from '../db';
import { User, UserClass } from './user';

export class PostClass extends Model<
  InferAttributes<PostClass>,
  InferCreationAttributes<PostClass>
> {
  declare id: CreationOptional<number>;
  declare userId: ForeignKey<UserClass['id']>;
  declare message: string;
}

export const Post = PostClass.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    message: {
      type: new DataTypes.STRING(),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'posts'
  }
);
