import { NextFunction, Request, Response } from 'express';

export default function errorHandlerMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
}