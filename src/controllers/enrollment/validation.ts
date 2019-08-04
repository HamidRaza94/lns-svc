import { MONGO_REGEX, NAME_REGEX } from '../../libs';

export default {
  create: {
    name: {
      in: ['body'],
      isRequired: true,
      regex: NAME_REGEX,
      isString: true,
    },

    fatherHusbandName: {
      in: ['body'],
      isRequired: true,
      regex: NAME_REGEX,
      isString: true,
    },

    address: {
      in: ['body'],
      isRequired: true,
      isString: true,
    },
  },

  read: {
    id: {
      in: ['params'],
      regex: MONGO_REGEX,
    },

    name: {
      in: ['query'],
      regex: NAME_REGEX,
      isString: true,
    },

    fatherHusbandName: {
      in: ['query'],
      regex: NAME_REGEX,
      isString: true,
    },

    limit: {
      in: ['query'],
      isNumber: true,
    },

    skip: {
      in: ['query'],
      isNumber: true,
      default: 0,
    },
  },

  update: {
    id: {
      in: ['body'],
      regex: MONGO_REGEX,
      isRequired: true,
    },

    dataToUpdate: {
      in: ['body'],
      isObject: true,
      isRequired: true,
    },
  },

  delete: {
    id: {
      in: ['params'],
      regex: MONGO_REGEX,
      isRequired: true,
    },
  },
};
