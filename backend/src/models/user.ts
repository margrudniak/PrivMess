import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManySetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute
} from 'sequelize';
import bcrypt from 'bcrypt';
import { sequelize } from '../db';
import { Post, PostClass } from './post';
export class UserClass extends Model<
  InferAttributes<UserClass>,
  InferCreationAttributes<UserClass>
> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
  declare getPosts: HasManyGetAssociationsMixin<PostClass>;
  declare addPost: HasManyAddAssociationMixin<PostClass, number>;
  declare addPosts: HasManyAddAssociationsMixin<PostClass, number>;
  declare setPosts: HasManySetAssociationsMixin<PostClass, number>;
  declare removePost: HasManyRemoveAssociationMixin<PostClass, number>;
  declare removePosts: HasManyRemoveAssociationsMixin<PostClass, number>;
  declare hasPost: HasManyHasAssociationMixin<PostClass, number>;
  declare hasPosts: HasManyHasAssociationsMixin<PostClass, number>;
  declare countPosts: HasManyCountAssociationsMixin;
  declare createPost: HasManyCreateAssociationMixin<PostClass, 'userId'>;
  generateHash(password: string): NonAttribute<string> {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }
  validPassword(password: string): NonAttribute<boolean> {
    return bcrypt.compareSync(password, this.password);
  }
  declare static associations: {
    posts: Association<UserClass, PostClass>;
  };
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

User.hasMany(Post, {
  foreignKey: 'userId',
  as: 'posts'
});