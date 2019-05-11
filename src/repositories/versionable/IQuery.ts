interface IVersionableQuery {
  deletedAt?: Date;
}

interface IVersionableProjection {
  _id?: number;
}

export { IVersionableQuery, IVersionableProjection };
