import { Request, Response } from 'express';
import { Post } from '../models';

export const createPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.create({
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
