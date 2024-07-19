import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { DataBaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';
const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Provide a valid Email'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('password must be between 4 and 20 characters'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    console.log('User created..');
    throw new DataBaseConnectionError();

    res.send({});
  }
);

export { router as signupRouter };
