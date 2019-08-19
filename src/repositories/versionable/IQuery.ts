interface IVersionableQuery {
  originalId?: String;
  deletedAt?: Date;
}

interface IVersionableProjection {
  _id?: number;
}

export { IVersionableQuery, IVersionableProjection };
