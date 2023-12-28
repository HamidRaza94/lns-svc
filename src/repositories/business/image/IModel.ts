import { IVersionableModel } from '../../versionable';
import { IMAGE_TYPES } from '../../../libs/constants';

interface IImageModel extends IVersionableModel {
  type: IMAGE_TYPES,
  imageURL: string,
  imagePublicId: string,
}

export default IImageModel;
