import { Model } from 'mongoose';

import { VersionableRepository } from '../../versionable';
import IMemberModel from './IModel';
import MemberModel from './Model';
import { IMemberData, IMemberConditions } from './IQuery';
import { IOptions } from '../../entities';

class MemberRepository extends VersionableRepository<
  IMemberModel,
  Model<IMemberModel>,
  IMemberData,
  IMemberConditions,
  IOptions
> {
  constructor() {
    super(MemberModel);
  }

  public async create(data: IMemberData) {
    return super.create(data);
  }

  public read(conditions?: IMemberConditions, projection?: string, options?: IOptions) {
    return super.find(conditions, projection, options);
  }

  public async update(conditions: IMemberConditions, dataToUpdate: IMemberData, options?: IOptions ) {
    return super.update(conditions, dataToUpdate, options);
  }

  public async delete(conditions: IMemberConditions) {
    return await super.delete(conditions);
  }
}

export default new MemberRepository();
