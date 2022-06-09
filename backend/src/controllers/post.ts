import { Request, Response } from 'express';
import { Post, PostClass, User } from '../models';

export const createPost = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.body.userId);
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    const post = await user.createPost({
      message: req.body.message
    });

    //return Post without userId attribute
    const returnedPost = await Post.findAll({
      where: {
        id: post.id
      },
      attributes: { exclude: ['userId'] }
    });

    if (post) {
      res.status(200).send(...returnedPost);
    }
  } catch (error) {
    console.error('ERROR createPost: ', error);
    res.status(500).send({ message: JSON.parse(JSON.stringify(error.message)) });
  }
};

export const removePost = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.body.userId);
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    await user
      .removePost(req.body.postId)
      .then(() => res.status(200).send({ message: 'Post deleted!' }));
  } catch (error) {
    console.error('ERROR removePost: ', error);
    res.status(500).send({ message: error.message });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.findAndCountAll({
      attributes: { exclude: ['userId'] },
      order: [['createdAt', 'DESC']],
      where: {
        userId: +req.query.userId
      },
      limit: Number(req.query.size),
      offset: Number(req.query.page) * Number(req.query.size)
    });
    if (!posts) {
      return res.status(404).send({ message: 'No posts.' });
    }
    res.send(posts.rows);
  } catch (error) {
    console.error('ERROR getPosts: ', error);
    res.status(500).send({ message: error.message });
  }
};
