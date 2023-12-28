import { Model } from 'mongoose';

import { VersionableRepository } from '../../versionable';
import IImageModel from './IModel';
import ImageModel from './Model';
import { IImageData, IImageConditions } from './IQuery';
import { IOptions } from '../../entities';

class Repository extends VersionableRepository<
  IImageModel,
  Model<IImageModel>,
  IImageData,
  IImageConditions,
  IOptions
> {
  constructor() {
    super(ImageModel);
  }

  public async create(data: IImageData) {
    return await super.create(data);
  }

  public async read(conditions?: IImageConditions, options?: IOptions) {
    return await super.find(conditions, '-password', options);
  }

  public update(conditions: IImageConditions, dataToUpdate: IImageData, options?: IOptions) {
    return super.update(conditions, dataToUpdate, options);
  }

  public delete(conditions: IImageConditions) {
    return super.delete(conditions);
  }
}

export default new Repository();
