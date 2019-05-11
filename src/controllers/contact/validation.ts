import { NAME_REGEX, EMAIL_REGEX, PHONE_REGEX } from '../../libs';

const contactValidation = {
  create: {
    name: {
      in: ['body'],
      regex: NAME_REGEX,
      isRequired: true,
      isString: true
    },

    email: {
      in: ['body'],
      regex: EMAIL_REGEX,
      isRequired: true,
      isString: true
    },

    phone: {
      in: ['body'],
      regex: PHONE_REGEX,
      isRequired: true,
      isNumber: true
    },

    comment: {
      in: ['body'],
      isRequired: true,
      isString: true
    }
  },

  read: {
    name: {
      in: ['query'],
      regex: NAME_REGEX,
      isString: true
    },

    email: {
      in: ['query'],
      regex: EMAIL_REGEX,
      isString: true
    },

    phone: {
      in: ['query'],
      regex: PHONE_REGEX,
      isNumber: true
    },

    limit: {
      in: ['query'],
      isNumber: true,
      default: 10
    },

    skip: {
      in: ['query'],
      isNumber: true,
      default: 0
    }
  }
};

export default contactValidation;
