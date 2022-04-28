import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] as string;
  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded: JwtPayload) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!'
      });
    }
    req.body.id = decoded.id;
    next();
  });
};
