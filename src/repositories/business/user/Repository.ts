import { Model } from 'mongoose';

import { VersionableRepository } from '../../versionable';
import IUserModel from './IModel';
import UserModel from './Model';
import { IUserData, IUserConditions } from './IQuery';
import { IOptions } from '../../entities';

class EnrollmentRepository extends VersionableRepository<
  IUserModel,
  Model<IUserModel>,
  IUserData,
  IUserConditions,
  IOptions
> {
  constructor() {
    super(UserModel);
  }

  public async create(data: IUserData) {
    return super.create(data);
  }

  public read(conditions?: IUserConditions, projection?: [string], options?: IOptions) {
    return super.find(conditions, projection, options);
  }

  public update(conditions: IUserConditions, dataToUpdate: IUserData, options?: IOptions) {
    return super.update(conditions, dataToUpdate, options);
  }

  public delete(conditions: IUserConditions) {
    return super.delete(conditions);
  }
}

export default new EnrollmentRepository();
