import { Document, DocumentQuery, Model, Types } from 'mongoose';
import { IVersionableQuery, IVersionableProjection } from './IQuery';

class VersionableRepository<
  D extends Document,
  M extends Model<D[], D>,
  IData extends IVersionableQuery,
  IConditions extends IVersionableQuery,
  IProjection extends IVersionableProjection,
  IOptions
> {
  constructor(private model: M) {}

  public static generateObjectId(): string {
    return String(Types.ObjectId());
  }

  public async countDocuments() {
    return await this.model.countDocuments();
  }

  public async create(data: IData) {
    const id = VersionableRepository.generateObjectId();

    const modelModified = new this.model({
      _id: id,
      originalId: id,
      ...data
    });

    const doc = await modelModified.save();

    if (!doc) {
      throw {
        error: 'Bad Request',
        message: 'Data Not Created',
        status: 400
      };
    }

    return doc;
  }

  public async find(
    conditions?: IConditions,
    projection?: IProjection,
    options?: IOptions
  ): DocumentQuery<D[], D> {
    conditions.deletedAt = undefined;
    projection._id = 0;
    const doc = await this.model.find(conditions, projection, options).lean();

    if (!doc) {
      throw {
        error: 'Not Found',
        message: 'Data Not Present',
        status: 404
      };
    }

    return doc;
  }

  public async update(
    conditions: IConditions,
    dataToUpdate: IData,
    options?: IOptions
  ) {
    const prevDoc = await this.findOne(conditions);
    const newDoc = {...prevDoc};
    const curDate = new Date();

    prevDoc.deletedAt = curDate;
    newDoc.updatedAt = curDate;
    newDoc._id = await VersionableRepository.generateObjectId();

    Object.assign(newDoc, dataToUpdate);

    await this.updateOne(conditions, prevDoc, options);
    const doc = await this.model.create(newDoc);

    if (!doc) {
      throw {
        error: 'Bad Request',
        message: 'Data Not Updated',
        status: 400
      };
    }

    return doc;
  }

  public async delete(conditions: IConditions) {
    await this.findOne(conditions);
    const dataToUpdate = { deletedAt: new Date() } as IData;
    return await this.updateOne(conditions, dataToUpdate);
  }

  public async findOne(
    conditions?: IConditions,
    projection?: IProjection,
    options?: IOptions
  ): DocumentQuery<D[], D> {
    conditions.deletedAt = undefined;
    projection._id = 0;
    const doc = await this.model.findOne(conditions, projection, options).lean();

    if (!doc) {
      throw {
        error: 'Not Found',
        message: 'Data Not Present',
        status: 404
      };
    }

    return doc;
  }

  public async updateOne(
    conditions: IConditions,
    dataToUpdate: IData,
    options?: IOptions
  ) {
    conditions.deletedAt = undefined;
    const doc = await this.model.updateOne(conditions, dataToUpdate, options);

    if (!doc) {
      throw {
        error: 'Bad Request',
        message: 'Data Not Updated',
        status: 400
      };
    }

    return doc;
  }
}

export default VersionableRepository;
