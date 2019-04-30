const updateValidation = {
  create: {
    type: {
      in: ['body'],
      isIn: ['news', 'link', 'notice'],
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
      isIn: ['news', 'link', 'notice'],
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
      regex: /^[0-9a-fA-F]{24}$/,
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
      regex: /^[0-9a-fA-F]{24}$/,
      isRequired: true
    }
  }
};

export default updateValidation;
