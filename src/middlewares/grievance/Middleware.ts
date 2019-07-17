import {
  grievanceRepository,
  IGrievanceData,
  IGrievanceConditions,
  IGrievanceProjection,
  IGrievanceOptions
} from '../../repositories';

class GrievanceMiddleware {
  public async create(data: IGrievanceData) {
    console.log(data);
    return await grievanceRepository.create(data);
  }
}

export default new GrievanceMiddleware();
