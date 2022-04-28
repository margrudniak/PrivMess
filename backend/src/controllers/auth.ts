import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db';

const User = db.user;

export const signup = async (req: Request, res: Response) => {
  try {
    await User.create({
      email: req.body.email,
      password: User.prototype.hashSync(req.body.password)
    });
  } catch (error) {
    console.error('ERROR signup: ', error);
    res.status(500).send({ message: error.message });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    const passwordIsValid = await User.prototype.validPassword(req.body.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!'
      });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES
    });
    res.status(200).send({
      id: user.id,
      email: user.email,
      accessToken: token
    });
  } catch (error) {
    console.error('ERROR signin: ', error);
    res.status(500).send({ message: error.message });
  }
};
