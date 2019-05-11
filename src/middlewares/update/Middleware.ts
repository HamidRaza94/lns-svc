import { Request } from 'express';

import {
  updateRepository,
  IUpdateData,
  IUpdateConditions,
  IUpdateProjection,
  IUpdateOptions
} from '../../repositories';

class UpdateMiddleware {
  public async create(req: Request) {
    const {
      body: { type, headline, description }
    } = req;

    const updateData: IUpdateData = {
      type,
      headline,
      description
    };

    return await updateRepository.create(updateData);
  }

  public async read(req: Request) {
    const {
      params: { type },
      query: { limit, skip }
    } = req;

    const conditions: IUpdateConditions = {};

    if (type) {
      conditions.type = type;
    }

    const projection: IUpdateProjection = {};

    const options: IUpdateOptions = {
      limit: parseInt(limit),
      skip: parseInt(skip)
    };

    return await updateRepository.find(conditions, projection, options);
  }

  public async update(req: Request) {
    const {
      body: { id, dataToUpdate }
    } = req;

    const conditions: IUpdateConditions = { originalId: id };
    return await updateRepository.update(conditions, dataToUpdate);
  }

  public async delete(req: Request) {
    const {
      params: { id }
    } = req;

    const conditions: IUpdateConditions = { originalId: id };
    return await updateRepository.delete(conditions);
  }
}

export default new UpdateMiddleware();
