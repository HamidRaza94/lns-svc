import { Model } from 'mongoose';

import { VersionableRepository } from '../../versionable';
import ICourseModel from './IModel';
import CourseModel from './Model';
import { ICourseData, ICourseConditions } from './IQuery';
import { IOptions } from '../../entities';

class CourseRepository extends VersionableRepository<
  ICourseModel,
  Model<ICourseModel>,
  ICourseData,
  ICourseConditions,
  IOptions
> {
  constructor() {
    super(CourseModel);
  }

  public async createAll(data: [ICourseData]) {
    return super.insertMany(data);
  }

  public async create(data: ICourseData) {
    return super.create(data);
  }

  public read(conditions?: ICourseConditions, projection?: string, options?: IOptions) {
    return super.find(conditions, projection, options);
  }

  public update(conditions: ICourseConditions, dataToUpdate: ICourseData, options?: IOptions) {
    return super.update(conditions, dataToUpdate, options);
  }

  public delete(conditions: ICourseConditions) {
    return super.delete(conditions);
  }
}

export default new CourseRepository();
