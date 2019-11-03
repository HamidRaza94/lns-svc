import { Model } from 'mongoose';

import { VersionableRepository } from '../../versionable';
import IContactModel from './IModel';
import ContactModel from './Model';
import { IContactData, IContactConditions } from './IQuery';
import { IOptions } from '../../entities';

class ContactRepository extends VersionableRepository<
  IContactModel,
  Model<IContactModel>,
  IContactData,
  IContactConditions,
  IOptions
> {
  constructor() {
    super(ContactModel);
  }

  public async create(data: IContactData) {
    return super.create(data);
  }

  public find(conditions?: IContactConditions, projection?: string, options?: IOptions) {
    return super.find(conditions, projection, options);
  }
}

export default new ContactRepository();
