import { Request, Response } from 'express';
import { User } from '../models';

export const createPost = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.body.userId);
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    const post = await user.createPost({
      message: req.body.message,
    });
    if (post) {
      res.status(200).send({ message: 'Post created!' });
    }
  } catch (error) {
    console.error('ERROR signup: ', error);
    res.status(500).send({ message: JSON.parse(JSON.stringify(error.message)) });
  }
};

export const removePost = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.body.userId);
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    await user.removePost(req.body.postId).then(() => res.status(200).send({ message: 'Post deleted!' }));
  } catch (error) {
    console.error('ERROR signup: ', error);
    res.status(500).send({ message: error.message });
  }
};