import { Request, Response, NextFunction } from 'express';
import { db } from '../db';

const User = db.user;

export const checkIfEmailExist = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (user) {
      res.status(400).send({
        message: 'Failed! Email is already in use!'
      });
      return;
    }
    next();
  } catch (error) {
    console.error('ERROR checkIfEmailExist: ', error);
  }
};
