import {
  grievanceRepository,
  IGrievanceData,
  IGrievanceConditions,
  IOptions,
} from '../../repositories';

class GrievanceMiddleware {
  public async create(data: IGrievanceData) {
    return await grievanceRepository.create(data);
  }

  public async read(conditions?: IGrievanceConditions, projection?: [string], options?: IOptions) {
    return await grievanceRepository.find(conditions, projection, options);
  }

  public async update(conditions: IGrievanceConditions, dataToUpdate: IGrievanceData, options?: IOptions) {
    return await grievanceRepository.update(conditions, dataToUpdate, options);
  }

  public async delete(conditions: IGrievanceConditions) {
    return await grievanceRepository.delete(conditions);
  }
}

export default new GrievanceMiddleware();
