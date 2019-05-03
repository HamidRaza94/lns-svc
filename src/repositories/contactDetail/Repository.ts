import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import IContactDetailModel from './IModel';
import ContactDetailModel from './Model';
import {
  IContactDetailData,
  IContactDetailConditions,
  IContactDetailProjection,
  IContactDetailOptions
} from './IQuery';

class ContactDetailRepository extends VersionableRepository<
  IContactDetailModel,
  Model<IContactDetailModel>,
  IContactDetailData,
  IContactDetailConditions,
  IContactDetailProjection,
  IContactDetailOptions
> {
  constructor() {
    super(ContactDetailModel);
  }

  public async create(data: IContactDetailData, id: string) {
    return super.create(data, id);
  }

  public find(
    conditions?: IContactDetailConditions,
    projection?: IContactDetailProjection,
    options?: IContactDetailOptions
  ) {
    return super.find(conditions, projection, options);
  }

  public async update(
    conditions: IContactDetailConditions,
    dataToUpdate: IContactDetailData,
    options?: IContactDetailOptions
  ) {
    return super.update(conditions, dataToUpdate, options);
  }

  public async delete(conditions: IContactDetailConditions) {
    return await super.delete(conditions);
  }
}

export default new ContactDetailRepository();
