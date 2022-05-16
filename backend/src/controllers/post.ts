import { Request, Response } from 'express';
import { Post, User } from '../models';

export const createPost = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.body.id
      }
    });
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    const post = await user.addPost({
      message: req.body.message,
      createdAt: new Date()
    });
    if (post) {
      res.status(200).send({ message: 'Post created!' });
    }
  } catch (error) {
    console.error('ERROR signup: ', error);
    res.status(500).send({ message: error.message });
  }
};
