import { Express, Request, Response, NextFunction } from 'express';
import { signin, signup } from '../controllers';
import { checkIfEmailExist } from '../middleware';

export const createAuthRoutes = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });
  app.post('/api/auth/signup', checkIfEmailExist, signup);
  app.post('/api/auth/signin', signin);
};
