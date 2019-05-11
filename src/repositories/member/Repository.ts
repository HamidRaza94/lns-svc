import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import IMemberModel from './IModel';
import MemberModel from './Model';
import {
  IMemberData,
  IMemberConditions,
  IMemberProjection,
  IMemberOptions
} from './IQuery';

class MemberRepository extends VersionableRepository<
  IMemberModel,
  Model<IMemberModel>,
  IMemberData,
  IMemberConditions,
  IMemberProjection,
  IMemberOptions
> {
  constructor() {
    super(MemberModel);
  }

  public async create(data: IMemberData) {
    return super.create(data);
  }

  public find(
    conditions?: IMemberConditions,
    projection?: IMemberProjection,
    options?: IMemberOptions
  ) {
    return super.find(conditions, projection, options);
  }

  public async update(
    conditions: IMemberConditions,
    dataToUpdate: IMemberData,
    options?: IMemberOptions
  ) {
    return super.update(conditions, dataToUpdate, options);
  }

  public async delete(conditions: IMemberConditions) {
    return await super.delete(conditions);
  }
}

export default new MemberRepository();
