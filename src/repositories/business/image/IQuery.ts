import { IVersionableQuery } from '../../versionable';
import { IMAGE_TYPES } from '../../../libs/constants';

interface IImageData extends IVersionableQuery {
  type: IMAGE_TYPES,
  imageURL: string,
  imagePublicId: string,
}

interface IImageConditions extends IVersionableQuery {
  type?: IMAGE_TYPES,
}

export { IImageData, IImageConditions }
