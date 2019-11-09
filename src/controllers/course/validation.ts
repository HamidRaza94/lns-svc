import { validationRule } from '../../libs';
import { REGEX } from '../../libs/constants';

export default {
  create: {
    code: validationRule.string.inBody(),
    name: validationRule.string.inBody(),
  },

  read: {
    code: validationRule.string.inQuery(),
    name: validationRule.string.inQuery(),
    ...validationRule.limitSkip,
  },

  readByCode: {
    code: validationRule.string.inParams(),
    ...validationRule.limitSkip,
  },

  update: {
    id: validationRule.byRegex.inParams(REGEX.mongo),
    dataToUpdate: validationRule.object.inBody(),
  },

  updateByCode: {
    code: validationRule.string.inParams(),
    dataToUpdate: validationRule.object.inBody(),
  },

  delete: {
    id: validationRule.byRegex.inParams(REGEX.mongo),
  },

  deleteByCode: {
    code: validationRule.string.inParams(),
  },
};
