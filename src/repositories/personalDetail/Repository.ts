import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import IPersonalDetailModel from './IModel';
import PersonalDetailModel from './Model';
import {
  IPersonalDetailData,
  IPersonalDetailConditions,
  IPersonalDetailProjection,
  IPersonalDetailOptions
} from './IQuery';

class PersonalDetailRepository extends VersionableRepository<
  IPersonalDetailModel,
  Model<IPersonalDetailModel>,
  IPersonalDetailData,
  IPersonalDetailConditions,
  IPersonalDetailProjection,
  IPersonalDetailOptions
> {
  constructor() {
    super(PersonalDetailModel);
  }

  public async create(data: IPersonalDetailData, id: string) {
    return super.create(data, id);
  }

  public find(
    conditions?: IPersonalDetailConditions,
    projection?: IPersonalDetailProjection,
    options?: IPersonalDetailOptions
  ) {
    return super.find(conditions, projection, options);
  }

  public async update(
    conditions: IPersonalDetailConditions,
    dataToUpdate: IPersonalDetailData,
    options?: IPersonalDetailOptions
  ) {
    return super.update(conditions, dataToUpdate, options);
  }

  public async delete(conditions: IPersonalDetailConditions) {
    return await super.delete(conditions);
  }
}

export default new PersonalDetailRepository();
