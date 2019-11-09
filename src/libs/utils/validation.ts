import { REGEX, REQUEST_TYPE } from '../constants';

const [body, params, query] = REQUEST_TYPE;

export default {
  string: {
    inBody: (required = true) => ({
      in: [body],
      isRequired: required,
      isString: true,
    }),
  
    inQuery: (required = false) => ({
      in: [query],
      isRequired: required,
      isString: true,
    }),
  
    inParams: (required = true) => ({
      in: [params],
      isRequired: required,
      isString: true,
    }),
  },

  number: {
    inBody: (required = true, defaultValue = 10) => ({
      in: [query],
      isRequired: required,
      isNumber: true,
      default: defaultValue,
    }),
  
    inQuery: (required = false, defaultValue = 10) => ({
      in: [query],
      isRequired: required,
      isNumber: true,
      default: defaultValue,
    }),
  
    inParams: (required = true, defaultValue = 10) => ({
      in: [params],
      isRequired: required,
      isNumber: true,
      default: defaultValue,
    }),
  },

  object: {
    inBody: (required = true) => ({
      in: [body],
      isRequired: required,
      isObject: true,
    }),
  
    inQuery: (required = false) => ({
      in: [query],
      isRequired: required,
      isObject: true,
    }),
  
    inParams: (required = true) => ({
      in: [params],
      isRequired: required,
      isObject: true,
    }),
  },

  boolean: {
    inBody: (required = true) => ({
      in: [body],
      isRequired: required,
      isBoolean: true,
    }),
  
    inQuery: (required = false) => ({
      in: [query],
      isRequired: required,
      isBoolean: true,
    }),
  
    inParams: (required = true) => ({
      in: [params],
      isRequired: required,
      isBoolean: true,
    }),
  },

  byRegex: {
    inBody: (regex: any, required = true) => ({
      in: [body],
      regex,
      isRequired: required,
    }),

    inQuery: (regex: any, required = false) => ({
      in: [query],
      regex,
      isRequired: required,
    }),

    inParams: (regex: any, required = true) => ({
      in: [query],
      regex,
      isRequired: required,
    }),
  },

  isIn: {
    inBody: (isIn: any, required = true) => ({
      in: [body],
      isIn,
      isRequired: required,
    }),

    inQuery: (isIn: any, required = false) => ({
      in: [query],
      isIn,
      isRequired: required,
    }),

    inParams: (isIn: any, required = true) => ({
      in: [params],
      isIn,
      isRequired: required,
    }),
  },

  test: {
    inBody: (required = true) => ({}),

    inQuery: (required = false) => ({}),

    inParams: (required = true) => ({}),
  },

  limitSkip: {
    limit: {
      in: [query],
      isNumber: true,
      default: 10,
    },

    skip: {
      in: [query],
      isNumber: true,
      default: 0,
    },
  }
}