import { IVersionableQuery } from '../versionable';

interface ITeamData extends IVersionableQuery {}

interface ITeamConditions extends IVersionableQuery {}

interface ITeamProjection {
  originalId?: String;
}

interface ITeamOptions {
  limit?: Number;
  skip?: Number;
}

export { ITeamData, ITeamConditions, ITeamProjection, ITeamOptions };
