import { validationRule } from '../../libs';
import { REGEX } from '../../libs/constants';

export default {
  create: {
    name: validationRule.string.inBody(),
    email: validationRule.byRegex.inBody(REGEX.email),
    phone: validationRule.byRegex.inBody(REGEX.phone),
    comment: validationRule.string.inBody(),
  },

  read: {
    name: validationRule.byRegex.inQuery(REGEX.alpha),
    email: validationRule.byRegex.inQuery(REGEX.email),
    phone: validationRule.byRegex.inQuery(REGEX.phone),
    ...validationRule.limitSkip,
  }
};
