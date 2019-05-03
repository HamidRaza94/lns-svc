import { UPDATE_TYPE, MONGO_REGEX } from '../../libs';

const updateValidation = {
  create: {
    type: {
      in: ['body'],
      isIn: UPDATE_TYPE,
      isRequired: true,
      isString: true
    },

    headline: {
      in: ['body'],
      isRequired: true,
      isString: true
    },

    description: {
      in: ['body'],
      isRequired: true,
      isString: true
    }
  },

  read: {
    type: {
      in: ['params'],
      isIn: UPDATE_TYPE,
      isRequired: false,
      isString: true
    },

    limit: {
      in: ['query'],
      isNumber: true,
      default: 10,
      isRequired: false
    },

    skip: {
      in: ['query'],
      isNumber: true,
      default: 0,
      isRequired: false
    }
  },

  update: {
    id: {
      in: ['body'],
      regex: MONGO_REGEX,
      isRequired: true
    },

    dataToUpdate: {
      in: ['body'],
      isObject: true,
      isRequired: true
    }
  },

  delete: {
    id: {
      in: ['params'],
      regex: MONGO_REGEX,
      isRequired: true
    }
  }
};

export default updateValidation;
