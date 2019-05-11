import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import ITeamModel from './IModel';
import TeamModel from './Model';
import {
  ITeamData,
  ITeamConditions,
  ITeamProjection,
  ITeamOptions
} from './IQuery';

class TeamRepository extends VersionableRepository<
  ITeamModel,
  Model<ITeamModel>,
  ITeamData,
  ITeamConditions,
  ITeamProjection,
  ITeamOptions
> {
  constructor() {
    super(TeamModel);
  }

  public async create(data: ITeamData) {
    return super.create(data);
  }

  public find(
    conditions?: ITeamConditions,
    projection?: ITeamProjection,
    options?: ITeamOptions
  ) {
    return super.find(conditions, projection, options);
  }

  public async update(
    conditions: ITeamConditions,
    dataToUpdate: ITeamData,
    options?: ITeamOptions
  ) {
    return super.update(conditions, dataToUpdate, options);
  }

  public async delete(conditions: ITeamConditions) {
    return await super.delete(conditions);
  }
}

export default new TeamRepository();
