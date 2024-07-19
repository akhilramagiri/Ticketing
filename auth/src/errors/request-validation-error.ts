import { ValidationError } from 'express-validator';
import { CustomError } from './customerror';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super('Invalid request');

    //Only becasuse we are extending built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.map((error) => {
      if (error.type === 'field') {
        return { message: error.msg, field: error.path };
      } else return { message: error.msg };
    });
  }
}
