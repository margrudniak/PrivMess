import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model
} from 'sequelize';
import { sequelize } from '../db';
import { UserClass } from './user';

export class PostClass extends Model<
  InferAttributes<PostClass>,
  InferCreationAttributes<PostClass>
> {
  declare id: CreationOptional<number>;
  declare userId: ForeignKey<UserClass['id']>;
  declare createdAt: CreationOptional<Date>;
  declare message: string;
}

export const Post = PostClass.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    createdAt: DataTypes.DATE,
    message: {
      type: new DataTypes.STRING(),
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'posts'
  }
);
