import { Request, Response, NextFunction } from 'express';

import { successHandler } from '../../libs';
import { uploadFile, deleteFile } from '../../libs/cloudinary';
import { imageRepository } from '../../repositories';

class Controller {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { type, image } = req.body;

      const { secure_url: imageURL, public_id: imagePublicId } = await uploadFile(image, type);
      const result = await imageRepository.create({ type, imageURL, imagePublicId });

      res.status(201).send(successHandler('Image successfully created', 201, result));
    } catch (err) {
      console.error('ImageController :: create ::', err);
      next(err);
    }
  }

  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { type } = req.params as any;

      const result = await imageRepository.read({ type });

      if (!result.length) {
        throw {
          error: 'E108',
          message: 'Wrong image type',
          status: 404,
        };
      }

      res.status(200).send(successHandler('Image successfully fetched', 200, result));
    } catch (err) {
      console.error('ImageController :: get ::', err);
      next(err);
    }
  }

  public async removeImage(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const result = await imageRepository.findOne({ originalId: id });

      if (!result) {
        throw {
          error: 'E107',
          message: 'Image does not exist',
          status: 404,
        };
      }

      await imageRepository.delete({ originalId: id });
      deleteFile(result.imagePublicId).catch((err) => console.error(err));

      return res.status(200).send(successHandler('Image successfully deleted', 200, result));
    } catch (err) {
      console.error('UserController :: removeUser ::', err);
      next(err);
    }
  }
}

export default new Controller();
