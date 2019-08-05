import { NextFunction, Request, Response } from 'express';

export default config => (req: Request, res: Response, next: NextFunction) => {
  const keys = Object.keys(config);
  keys.forEach((key: string) => {
    const items = config[key];
    const value = items.in.map((item: string) => req[item][key]);
    const validatedValue = value.filter((item: any) => item);

    if (items && items.isRequired) {
      if (value.length !== validatedValue.length) {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} field is required`,
          status: 400
        });
      }
    }

    if (items && items.isString) {
      if (validatedValue[0] && typeof validatedValue[0] !== 'string') {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} field should be string`,
          status: 400
        });
      }
    }

    if (items && items.isBoolean) {
      if (validatedValue[0] && typeof validatedValue[0] !== 'boolean') {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} field should be true or false`,
          status: 400
        });
      }
    }

    if (items && items.isObject) {
      if (validatedValue[0] && typeof validatedValue[0] !== 'object') {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} should be object`,
          status: 400
        });
      }
    }

    if (items && items.isNumber) {
      if (validatedValue[0] && isNaN(validatedValue[0])) {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} field should be number`,
          status: 400
        });
      }
    }

    if (items && items.isIn) {
      if (validatedValue[0] && !items.isIn.includes(validatedValue[0])) {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} field can be ${items.isIn}`,
          status: 400
        });
      }
    }

    if (items && items.regex) {
      if (validatedValue[0]) {
        const _regex = RegExp(items.regex);
        if (!_regex.test(validatedValue[0])) {
          return next({
            error: 'BAD_REQUEST',
            message: `${key} should be in correct format`,
            status: 400
          });
        }
      }
    }

    if (items && items.length) {
      if (validatedValue[0]) {
        if (
          items.length.value &&
          validatedValue[0].toString().length !== items.length.value
        ) {
          return next({
            error: 'BAD_REQUEST',
            message: `${key} should be equal ${items.length.value}`,
            status: 400
          });
        } else if (
          items.length.max &&
          items.length.min &&
          (validatedValue[0].toString().length > items.length.max ||
            validatedValue[0].toString().length < items.length.min)
        ) {
          return next({
            error: 'BAD_REQUEST',
            message: `${key} should be between ${items.length.min} and ${
              items.length.max
            }`,
            status: 400
          });
        } else if (
          items.length.max &&
          validatedValue[0].toString().length > items.length.max
        ) {
          return next({
            error: 'BAD_REQUEST',
            message: `${key} should be lesser than equal ${items.length.max}`,
            status: 400
          });
        } else if (
          items.length.min &&
          validatedValue[0].toString().length < items.length.min
        ) {
          return next({
            error: 'BAD_REQUEST',
            message: `${key} should be lesser than equal ${items.length.min}`,
            status: 400
          });
        }
      }
    }

    if (items && items.default) {
      if (validatedValue[0] === undefined) {
        items.in.map((item: string) => {
          req[item][key] = items.default;
        });
      }
    }
  });

  next();
};
