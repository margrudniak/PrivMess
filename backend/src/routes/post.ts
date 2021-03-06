import express from 'express';
import { verifyToken } from '../middleware';
import { createPost, getPosts, removePost } from '../controllers';

export const postRoute = express.Router();

postRoute.post('/create', verifyToken, createPost);
postRoute.delete('/remove', verifyToken, removePost);
postRoute.get('/posts', verifyToken, getPosts);