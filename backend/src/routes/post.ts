import express from 'express';
// import { createPost } from 'src/controllers';
// import { verifyToken } from 'src/middleware';
import { verifyToken } from '../middleware';
import { createPost } from '../controllers';

export const postRoute = express.Router();

postRoute.post('/create', verifyToken, createPost);
