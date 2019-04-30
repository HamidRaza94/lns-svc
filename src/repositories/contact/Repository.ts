import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import IContactModel from './IModel';
import ContactModel from './Model';
import {
  IContactData,
  IContactConditions,
  IContactProjection,
  IContactOptions
} from './IQuery';

class ContactRepository extends VersionableRepository<
  IContactModel,
  Model<IContactModel>,
  IContactData,
  IContactConditions,
  IContactProjection,
  IContactOptions
> {
  constructor() {
    super(ContactModel);
  }

  public async create(data: IContactData) {
    return super.create(data);
  }

  public find(
    conditions?: IContactConditions,
    projection?: IContactProjection,
    options?: IContactOptions
  ) {
    return super.find(conditions, projection, options);
  }
}

export default new ContactRepository();
