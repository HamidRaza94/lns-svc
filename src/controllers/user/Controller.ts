import { Request, Response, NextFunction } from 'express';

import { successHandler, MESSAGE } from '../../libs';
import { generateHash, compareHash, generatedToken } from '../../libs/utils/encrypt';
import { uploadFile } from '../../libs/cloudinary';
import { userRepository } from '../../repositories';

class UserController {
  public async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        firstName,
        lastName,
        role,
        username,
        password,
        type,
        designation,
        profile,
        message,
        contacts,
      } = req.body;

      const isUsernameExist = await userRepository.find({ username });

      if (isUsernameExist?.length) {
        throw {
          error: 'E103',
          message: 'Username already exist',
          status: 404,
        }
      }

      const [hashedPassword, { secure_url: profileURL }] = await Promise.all([generateHash(password), uploadFile(profile)]);

      const userData = {
        firstName,
        lastName,
        role,
        username,
        password: hashedPassword,
        type,
        designation,
        message,
        contacts: contacts ? JSON.parse(contacts) : [],
        profile: profileURL,
      };

      await userRepository.create(userData);

      res.status(201).send(successHandler(`User ${MESSAGE.SUCCESS_RESPONSE.create}`, 201, { firstName, lastName, role, username }));
    } catch (err) {
      console.error('UserController :: signup ::', err);
      next(err);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;

      const user = await userRepository.findOne({ username });

      if (!user) {
        throw {
          error: 'E104',
          message: 'Username / Password is not correct',
          status: 404,
        }
      }

      const isPasswordMatch = await compareHash(password, user.password);

      if (!isPasswordMatch) {
        throw {
          error: 'E104',
          message: 'Username / Password is not correct',
          status: 404,
        }
      }

      const { firstName, lastName, role } = user;
      const payload = { firstName, lastName, role, username };

      const accessToken = generatedToken(payload);

      return res.status(200).send(successHandler(`User Successfully Logged in`, 200, { accessToken }));
    } catch (err) {
      console.error('UserController :: login ::', err);
      next(err);
    }
  }

  public async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const { type } = req.query;

      const result = await userRepository.read({ type } as any);

      return res.status(200).send(successHandler('User successfully fetched', 200, result));
    } catch (err) {
      console.error('UserController :: getAllUsers ::', err);
      next(err);
    }
  }
}

export default new UserController();
