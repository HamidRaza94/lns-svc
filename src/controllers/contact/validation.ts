const contactValidation = {
  create: {
    name: {
      in: ['body'],
      regex: /^[a-zA-Z ]*$/,
      isRequired: true,
      isString: true
    },

    email: {
      in: ['body'],
      regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      isRequired: true,
      isString: true
    },

    phone: {
      in: ['body'],
      regex: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
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
      regex: /^[a-zA-Z ]*$/,
      isString: true
    },

    email: {
      in: ['query'],
      regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      isString: true
    },

    phone: {
      in: ['query'],
      regex: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
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
