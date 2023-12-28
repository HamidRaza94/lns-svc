import { Model } from 'mongoose';

import { VersionableRepository } from '../../versionable';
import IUserModel from './IModel';
import UserModel from './Model';
import { IUserData, IUserConditions } from './IQuery';
import { IOptions } from '../../entities';

class UserRepository extends VersionableRepository<
  IUserModel,
  Model<IUserModel>,
  IUserData,
  IUserConditions,
  IOptions
> {
  constructor() {
    super(UserModel);
  }

  public async create(data: IUserData): Promise<Partial<IUserModel>> {
    const result = await super.create(data);

    const { password, ...restData } = result;

    return restData;
  }

  public async read(conditions?: IUserConditions, options?: IOptions) {
    return await super.find(conditions, '-password', options);
  }

  public update(conditions: IUserConditions, dataToUpdate: IUserData, options?: IOptions) {
    return super.update(conditions, dataToUpdate, options);
  }

  public delete(conditions: IUserConditions) {
    return super.delete(conditions);
  }
}

export default new UserRepository();
