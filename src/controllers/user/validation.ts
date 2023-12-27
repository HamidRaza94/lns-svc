import { validationRule } from '../../libs';
import { REGEX } from '../../libs/constants';

export default {
  create: {
    name: validationRule.byRegex.inBody(REGEX.alpha),
    fatherHusbandName: validationRule.byRegex.inBody(REGEX.alpha),
    address: validationRule.string.inBody(),
    phone: validationRule.byRegex.inBody(REGEX.phone),
  },

  read: {
    id: validationRule.byRegex.inParams(REGEX.mongo),
    name: validationRule.byRegex.inQuery(REGEX.alpha),
    fatherHusbandName: validationRule.byRegex.inQuery(REGEX.alpha),
    ...validationRule.limitSkip,
  },

  update: {
    id: validationRule.byRegex.inParams(REGEX.mongo),
    dataToUpdate: validationRule.object.inBody(),
  },

  delete: {
    id: validationRule.byRegex.inParams(REGEX.mongo),
  },
};
