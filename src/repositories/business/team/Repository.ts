import { Model } from 'mongoose';

import { VersionableRepository } from '../../versionable';
import ITeamModel from './IModel';
import TeamModel from './Model';
import { ITeamData, ITeamConditions } from './IQuery';
import { IOptions } from '../../entities';

class TeamRepository extends VersionableRepository<
  ITeamModel,
  Model<ITeamModel>,
  ITeamData,
  ITeamConditions,
  IOptions
> {
  constructor() {
    super(TeamModel);
  }

  public async create(data: ITeamData) {
    return super.create(data);
  }

  public read(conditions?: ITeamConditions, projection?: string, options?: IOptions) {
    return super.find(conditions, projection, options);
  }

  public async update(conditions: ITeamConditions, dataToUpdate: ITeamData, options?: IOptions) {
    return super.update(conditions, dataToUpdate, options);
  }

  public async delete(conditions: ITeamConditions) {
    return await super.delete(conditions);
  }
}

export default new TeamRepository();
