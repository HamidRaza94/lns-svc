import { Request, Response, NextFunction } from 'express';

import { successHandler, MESSAGE } from '../../libs';
import { generateHash, compareHash, generatedToken } from '../../libs/utils/encrypt';
import { uploadFile, deleteFile } from '../../libs/cloudinary';
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

      const [hashedPassword, cloudinaryRes] = await Promise.all([generateHash(password), uploadFile(profile)]);
      const { secure_url: profileURL, public_id: profilePublicId } = cloudinaryRes;

      const userData = {
        firstName,
        lastName,
        role,
        username,
        type,
        designation,
        message,
        contacts: contacts ? JSON.parse(contacts) : [],
        profile: profileURL,
        profilePublicId,
      };

      await userRepository.create({ ...userData, password: hashedPassword });

      res.status(201).send(successHandler(`User ${MESSAGE.SUCCESS_RESPONSE.create}`, 201, userData));
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

  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { username } = req.params;

      const result = await userRepository.findOne({ username });

      if (!result) {
        throw {
          error: 'E107',
          message: 'User does not correct',
          status: 404,
        };
      }

      return res.status(200).send(successHandler('User successfully fetched', 200, result));
    } catch (err) {
      console.error('UserController :: getUser ::', err);
      next(err);
    }
  }

  public async removeUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const result = await userRepository.findOne({ originalId: id });

      if (!result) {
        throw {
          error: 'E107',
          message: 'User does not correct',
          status: 404,
        };
      }

      await userRepository.delete({ originalId: id });

      try {
        deleteFile(result.profilePublicId);
      } catch (err) {
        console.error(err);
      }

      return res.status(200).send(successHandler('User successfully deleted', 200, result));
    } catch (err) {
      console.error('UserController :: removeUser ::', err);
      next(err);
    }
  }
}

export default new UserController();
