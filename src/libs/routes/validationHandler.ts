import { NextFunction, Request, Response } from 'express';

export default config => (req: Request, res: Response, next: NextFunction) => {
  const keys = Object.keys(config);
  keys.forEach(key => {
    const items = config[key];
    const value = items.in.map((item: string) => {
      return req[item][key];
    });
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

    if (items && items.isObject) {
      if (validatedValue[0] && typeof validatedValue[0] !== 'object') {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} should be object`,
          status: 400
        });
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
