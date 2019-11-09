import { Model } from 'mongoose';

import { VersionableRepository } from '../../versionable';
import ICenterModel from './IModel';
import CenterModel from './Model';
import { ICenterData, ICenterConditions } from './IQuery';
import { IOptions } from '../../entities';

class CenterRepository extends VersionableRepository<
  ICenterModel,
  Model<ICenterModel>,
  ICenterData,
  ICenterConditions,
  IOptions
> {
  constructor() {
    super(CenterModel);
  }

  public async createAll(data: [ICenterData]) {
    return super.insertMany(data);
  }

  public async create(data: ICenterData) {
    return super.create(data);
  }

  public find(conditions?: ICenterConditions, projection?: string, options?: IOptions) {
    return super.find(conditions, projection, options);
  }

  public findOne(conditions?: ICenterConditions, projection?: string, options?: IOptions) {
    return super.findOne(conditions, projection, options);
  }

  public update(conditions: ICenterConditions, dataToUpdate: ICenterData, options?: IOptions) {
    return super.update(conditions, dataToUpdate, options);
  }

  public delete(conditions: ICenterConditions) {
    return super.delete(conditions);
  }
}

export default new CenterRepository();
