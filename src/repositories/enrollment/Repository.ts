import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import IEnrollmentModel from './IModel';
import EnrollmentModel from './Model';
import { IEnrollmentData, IEnrollmentConditions, IEnrollmentProjection } from './IQuery';
import { IOptions } from '../entities';

class EnrollmentRepository extends VersionableRepository<
  IEnrollmentModel,
  Model<IEnrollmentModel>,
  IEnrollmentData,
  IEnrollmentConditions,
  IEnrollmentProjection,
  IOptions
> {
  constructor() {
    super(EnrollmentModel);
  }

  public async create(data: IEnrollmentData) {
    return super.create(data);
  }

  public find(conditions?: IEnrollmentConditions, projection?: [string], options?: IOptions) {
    return super.find(conditions, projection, options);
  }

  public update(conditions: IEnrollmentConditions, dataToUpdate: IEnrollmentData, options?: IOptions) {
    return super.update(conditions, dataToUpdate, options);
  }

  public delete(conditions: IEnrollmentConditions) {
    return super.delete(conditions);
  }
}

export default new EnrollmentRepository();
