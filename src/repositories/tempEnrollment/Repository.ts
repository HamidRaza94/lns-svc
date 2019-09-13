import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import ITempEnrollmentModel from './IModel';
import TempEnrollmentModel from './Model';
import { ITempEnrollmentData, ITempEnrollmentConditions, ITempEnrollmentProjection } from './IQuery';
import { IOptions } from '../entities';

class TempEnrollmentRepository extends VersionableRepository<
  ITempEnrollmentModel,
  Model<ITempEnrollmentModel>,
  ITempEnrollmentData,
  ITempEnrollmentConditions,
  ITempEnrollmentProjection,
  IOptions
> {
  constructor() {
    super(TempEnrollmentModel);
  }

  public async create(data: ITempEnrollmentData) {
    return super.create(data);
  }

  public async bulkCreate(data: [ITempEnrollmentData]) {
    return super.insertMany(data);
  }

  public find(conditions?: ITempEnrollmentConditions, projection?: [string], options?: IOptions) {
    return super.find(conditions, projection, options);
  }

  public update(conditions: ITempEnrollmentConditions, dataToUpdate: ITempEnrollmentData, options?: IOptions) {
    return super.update(conditions, dataToUpdate, options);
  }

  public delete(conditions: ITempEnrollmentConditions) {
    return super.delete(conditions);
  }
}

export default new TempEnrollmentRepository();
