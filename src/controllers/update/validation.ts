import { validationRule } from '../../libs';
import { REGEX, UPDATE_TYPE } from '../../libs/constants';

export default {
  create: {
    type: validationRule.isIn.inBody(UPDATE_TYPE),
    headline: validationRule.string.inBody(),
    description: validationRule.string.inBody(),
  },

  read: {
    type: validationRule.isIn.inParams(UPDATE_TYPE),
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
