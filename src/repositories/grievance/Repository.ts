import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import IGrievanceModel from './IModel';
import GrievanceModel from './Model';
import { IGrievanceData, IGrievanceConditions, IGrievanceProjection } from './IQuery';
import { IOptions } from '../entities';

class GrievanceRepository extends VersionableRepository<
  IGrievanceModel,
  Model<IGrievanceModel>,
  IGrievanceData,
  IGrievanceConditions,
  IGrievanceProjection,
  IOptions
> {
  constructor() {
    super(GrievanceModel);
  }

  public async create(data: IGrievanceData) {
    return super.create(data);
  }

  public find(conditions?: IGrievanceConditions, projection?: [string], options?: IOptions) {
    return super.find(conditions, projection, options);
  }

  public update(conditions: IGrievanceConditions, dataToUpdate: IGrievanceData, options?: IOptions) {
    return super.update(conditions, dataToUpdate, options);
  }

  public delete(conditions: IGrievanceConditions) {
    return super.delete(conditions);
  }
}

export default new GrievanceRepository();
