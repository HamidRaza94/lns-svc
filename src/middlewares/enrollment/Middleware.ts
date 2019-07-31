import {
  enrollmentRepository,
  IEnrollmentData,
  IEnrollmentConditions,
  IEnrollmentProjection,
  IOptions,
} from '../../repositories';

class EnrollmentMiddleware {
  public async create(data: IEnrollmentData) {
    return await enrollmentRepository.create(data);
  }

  public async read(conditions?: IEnrollmentConditions, projection?: [string], options?: IOptions) {
    return await enrollmentRepository.find(conditions, projection, options);
  }

  public async update(conditions: IEnrollmentConditions, dataToUpdate: IEnrollmentData, options?: IOptions) {
    return await enrollmentRepository.update(conditions, dataToUpdate, options);
  }
}

export default new EnrollmentMiddleware();
