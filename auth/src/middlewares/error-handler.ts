import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/customerror';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /**
   * Create a common error response object with the format of
   * {
   *  errors: {
   *    message: string, field ?: string
   *  }
   * }
   */

  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({ error: [{ message: 'Something went wrong' }] });
};
