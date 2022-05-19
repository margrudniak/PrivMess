import express from 'express';
import { verifyToken } from '../middleware';
import { createPost, removePost } from '../controllers';

export const postRoute = express.Router();

postRoute.post('/create', verifyToken, createPost);
postRoute.post('/remove', verifyToken, removePost);