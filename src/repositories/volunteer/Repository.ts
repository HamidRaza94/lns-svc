import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import IVolunteerModel from './IModel';
import VolunteerModel from './Model';
import {
  IVolunteerData,
  IVolunteerConditions,
  IVolunteerProjection,
  IVolunteerOptions
} from './IQuery';

class VolunteerRepository extends VersionableRepository<
  IVolunteerModel,
  Model<IVolunteerModel>,
  IVolunteerData,
  IVolunteerConditions,
  IVolunteerProjection,
  IVolunteerOptions
> {
  constructor() {
    super(VolunteerModel);
  }

  public async create(data: IVolunteerData) {
    return super.create(data);
  }

  public find(
    conditions?: IVolunteerConditions,
    projection?: IVolunteerProjection,
    options?: IVolunteerOptions
  ) {
    return super.find(conditions, projection, options);
  }
}

export default new VolunteerRepository();
