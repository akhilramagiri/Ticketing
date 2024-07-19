/**
 * Reminder on Abstract classes.
 * Cannot be instantiated.
 * Used to set up requirements for subclasses.
 * Do Create a class when translated to JS, which means we can use it in instanceof checks.
 */

export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: any; field?: any }[];
}
