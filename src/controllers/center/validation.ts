import { validationRule } from '../../libs'

export default {
  create: {
    code: validationRule.string.inBody(),
    name: validationRule.string.inBody(),
    address: validationRule.object.inBody(),
  },

  list: {
    code: validationRule.string.inQuery(),
    name: validationRule.string.inQuery(),
    address: validationRule.object.inQuery(),
    ...validationRule.limitSkip,
  },

  read: {
    code: validationRule.string.inParams(),
    ...validationRule.limitSkip,
  },

  update: {
    code: validationRule.string.inParams(),
    dataToUpdate: validationRule.object.inBody(),
  },

  delete: {
    code: validationRule.string.inParams(),
  },
};
