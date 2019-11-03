import { MONGO_REGEX } from '../../libs';

export default {
  create: {
    code: {
      in: ['body'],
      isRequired: true,
      isString: true,
    },

    name: {
      in: ['body'],
      isRequired: true,
      isString: true,
    },
  },

  read: {
    code: {
      in: ['query'],
      isString: true,
    },

    name: {
      in: ['query'],
      isString: true,
    },

    limit: {
      in: ['query'],
      isNumber: true,
      default: 10,
    },

    skip: {
      in: ['query'],
      isNumber: true,
      default: 0,
    },
  },

  readByCode: {
    code: {
      in: ['params'],
      isRequired: true,
      isString: true,
    },

    limit: {
      in: ['query'],
      isNumber: true,
      default: 10,
    },

    skip: {
      in: ['query'],
      isNumber: true,
      default: 0,
    },
  },

  update: {
    id: {
      in: ['params'],
      regex: MONGO_REGEX,
      isRequired: true,
    },

    dataToUpdate: {
      in: ['body'],
      isObject: true,
      isRequired: true,
    },
  },

  updateByCode: {
    code: {
      in: ['params'],
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

  deleteByCode: {
    code: {
      in: ['params'],
      isRequired: true,
    },
  },
};
