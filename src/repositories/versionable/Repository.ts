import { Document, DocumentQuery, Model, Types } from 'mongoose';

import { IVersionableQuery } from './IQuery';

class VersionableRepository<
  D extends Document,
  M extends Model<D[], D>,
  IData extends IVersionableQuery,
  IConditions extends IVersionableQuery,
  IOptions
> {
  constructor(private model: M) {}

  private getFinalConditions(conditions: IConditions): IConditions {
    return { ...conditions, deletedAt: undefined };
  }

  private getFinalProjection(projection: [string]) {
    if (!projection) {
      return ['-_id'];
    } else if (projection.length && !projection.includes('*')) {
      return [ ...projection, '-_id', 'originalId' ];
    }

    return [];
  }

  private getFinalOptions(options: IOptions): any {
    return { ...options, lean: true };
  }

  public static generateObjectId(): string {
    return String(Types.ObjectId());
  }

  public async countDocuments() {
    return await this.model.countDocuments();
  }

  public async create(data: IData) {
    const id = VersionableRepository.generateObjectId();

    const modelModified = new this.model({ _id: id, originalId: id, ...data });
    const doc = await modelModified.save();

    if (!doc) {
      throw {
        error: 'Bad Request',
        message: 'Data Not Created',
        status: 400,
      };
    }

    return doc;
  }

  public async insertMany(data: [IData]) {
    const documents = [];

    for (const document of data) {
      const id = VersionableRepository.generateObjectId();
      const newDocument = Object.assign(document, { _id: id, originalId: id });
      documents.push(newDocument);
    }

    const doc = await this.model.insertMany(documents);

    if (!doc) {
      throw {
        error: 'Bad Request',
        message: 'Data Not Created',
        status: 400,
      };
    }

    return doc;
  }

  public async find(conditions?: IConditions, projection: any = '*', options?: IOptions): DocumentQuery<D[], D> {
    if (conditions && conditions.originalId) {
      return this.findOne(conditions, projection.split(','), options);
    }

    const finalConditions = this.getFinalConditions(conditions);
    const finalProjection = this.getFinalProjection(projection.split(','));
    const finalOptions = this.getFinalOptions(options);
    const doc = await this.model.find(finalConditions, finalProjection, finalOptions);

    if (!doc || !doc.length) {
      throw {
        error: 'Not Found',
        message: 'Data Not Found',
        status: 404,
      };
    }

    return doc;
  }

  public async update(conditions: IConditions, dataToUpdate: IData, options?: IOptions) {
    const prevDoc = await this.findOne(conditions, ['*']);

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
        status: 400,
      };
    }

    return doc;
  }

  public async delete(conditions: IConditions) {
    await this.findOne(conditions);
    const dataToUpdate = { deletedAt: new Date() } as IData;
    return await this.updateOne(conditions, dataToUpdate);
  }

  public async findOne(conditions?: IConditions, projection?: [string], options?: IOptions): DocumentQuery<D[], D> {
    const finalConditions = this.getFinalConditions(conditions);
    const finalProjection = this.getFinalProjection(projection);
    const finalOptions = this.getFinalOptions(options);
    const doc = await this.model.findOne(finalConditions, finalProjection, finalOptions);

    if (!doc) {
      throw {
        error: 'Not Found',
        message: 'Data Not Found',
        status: 404,
      };
    }

    return doc;
  }

  public async updateOne(conditions: IConditions, dataToUpdate: IData, options?: IOptions) {
    const finalConditions = this.getFinalConditions(conditions);
    const doc = await this.model.updateOne(finalConditions, dataToUpdate, options);

    if (!doc) {
      throw {
        error: 'Bad Request',
        message: 'Data Not Updated',
        status: 400
      };
    }

    if (doc.ok) {
      return 'success'
    }

    return doc;
  }
}

export default VersionableRepository;
