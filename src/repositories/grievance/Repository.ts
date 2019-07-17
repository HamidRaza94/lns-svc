import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import IGrievanceModel from './IModel';
import GrievanceModel from './Model';
import {
  IGrievanceData,
  IGrievanceConditions,
  IGrievanceProjection,
  IGrievanceOptions
} from './IQuery';

class GrievanceRepository extends VersionableRepository<
  IGrievanceModel,
  Model<IGrievanceModel>,
  IGrievanceData,
  IGrievanceConditions,
  IGrievanceProjection,
  IGrievanceOptions
> {
  constructor() {
    super(GrievanceModel);
  }

  public async create(data: IGrievanceData) {
    return super.create(data);
  }

  public find(
    conditions?: IGrievanceConditions,
    projection?: IGrievanceProjection,
    options?: IGrievanceOptions
  ) {
    return super.find(conditions, projection, options);
  }
}

export default new GrievanceRepository();
