import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import IUpdateModel from './IModel';
import UpdateModel from './Model';
import {
  IUpdateData,
  IUpdateConditions,
  IUpdateProjection,
  IUpdateOptions
} from './IQuery';

class UpdateRepository extends VersionableRepository<
  IUpdateModel,
  Model<IUpdateModel>,
  IUpdateData,
  IUpdateConditions,
  IUpdateProjection,
  IUpdateOptions
> {
  constructor() {
    super(UpdateModel);
  }

  public async create(data: IUpdateData) {
    return super.create(data);
  }

  public find(
    conditions?: IUpdateConditions,
    projection?: IUpdateProjection,
    options?: IUpdateOptions
  ) {
    return super.find(conditions, projection, options);
  }

  public async update(
    conditions: IUpdateConditions,
    dataToUpdate: IUpdateData,
    options?: IUpdateOptions
  ) {
    return super.update(conditions, dataToUpdate, options);
  }

  public async delete(conditions: IUpdateConditions) {
    return await super.delete(conditions);
  }
}

export default new UpdateRepository();
