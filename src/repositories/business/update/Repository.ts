import { Model } from 'mongoose';

import { VersionableRepository } from '../../versionable';
import IUpdateModel from './IModel';
import UpdateModel from './Model';
import { IUpdateData, IUpdateConditions } from './IQuery';
import { IOptions } from '../../entities';

class UpdateRepository extends VersionableRepository<
  IUpdateModel,
  Model<IUpdateModel>,
  IUpdateData,
  IUpdateConditions,
  IOptions
> {
  constructor() {
    super(UpdateModel);
  }

  public async create(data: IUpdateData) {
    return super.create(data);
  }

  public find(conditions?: IUpdateConditions, projection?: string, options?: IOptions) {
    return super.find(conditions, projection, options);
  }

  public async update(conditions: IUpdateConditions, dataToUpdate: IUpdateData, options?: IOptions) {
    return super.update(conditions, dataToUpdate, options);
  }

  public async delete(conditions: IUpdateConditions) {
    return await super.delete(conditions);
  }
}

export default new UpdateRepository();
