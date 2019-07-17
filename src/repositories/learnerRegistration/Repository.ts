import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import ILearnerRegistrationModel from './IModel';
import LearnerRegistrationModel from './Model';
import {
  ILearnerRegistrationData,
  ILearnerRegistrationConditions,
  ILearnerRegistrationOptions,
  ILearnerRegistrationProjection
} from './IQuery';

class LearnerRegistrationRepository extends VersionableRepository<
  ILearnerRegistrationModel,
  Model<ILearnerRegistrationModel>,
  ILearnerRegistrationData,
  ILearnerRegistrationConditions,
  ILearnerRegistrationProjection,
  ILearnerRegistrationOptions
> {
  constructor() {
    super(LearnerRegistrationModel);
  }

  public async create(data: ILearnerRegistrationData) {
    return super.create(data);
  }

  public find(
    conditions?: ILearnerRegistrationConditions,
    projection?: ILearnerRegistrationProjection,
    options?: ILearnerRegistrationOptions
  ) {
    return super.find(conditions, projection, options);
  }
}

export default new LearnerRegistrationRepository();
