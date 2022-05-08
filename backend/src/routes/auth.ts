import express from 'express';
import { signin, signout, signup } from '../controllers';
import { checkIfEmailExist } from '../middleware';

export const authRoute = express.Router();

authRoute.post('/signup', checkIfEmailExist, signup);
authRoute.post('/signin', signin);
authRoute.post('/signout', signout);
