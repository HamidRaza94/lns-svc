import { IVersionableModel } from '../../versionable';

interface ICenterModel extends IVersionableModel {
  code: string;
  name: string;
  address: {
    houseNo: string;
    streetNo: string;
    area: string;
    city: string;
    state: string;
    country: string;
  };
}

export default ICenterModel;
