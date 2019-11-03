import {
  NAME_REGEX,
  EMAIL_REGEX,
  PHONE_REGEX,
  DOB_REGEX,
  AADHAR_REGEX,
  PAN_REGEX,
  MONGO_REGEX,
  SEX,
  MARITAL_STATUS,
  RELIGION,
  CATEGORY
} from '../../libs';

export default {
  create: {
    name: {
      in: ['body'],
      regex: NAME_REGEX,
      isRequired: true,
      isString: true,
    },

    fatherHusbandName: {
      in: ['body'],
      regex: NAME_REGEX,
      isRequired: true,
      isString: true,
    },

    sex: {
      in: ['body'],
      isIn: SEX,
      isRequired: true,
      isString: true,
    },

    maritalStatus: {
      in: ['body'],
      isIn: MARITAL_STATUS,
      isRequired: true,
      isString: true,
    },

    religion: {
      in: ['body'],
      isIn: RELIGION,
      isRequired: true,
      isString: true,
    },

    category: {
      in: ['body'],
      isIn: CATEGORY,
      isRequired: true,
      isString: true,
    },

    dateOfBirth: {
      in: ['body'],
      isRequired: true,
      regex: DOB_REGEX,
    },

    placeOfBirth: {
      in: ['body'],
      isRequired: true,
      isString: true,
    },

    occupation: {
      in: ['body'],
      isRequired: true,
      isString: true,
    },

    email: {
      in: ['body'],
      regex: EMAIL_REGEX,
      isRequired: true,
      isString: true,
    },

    phone: {
      in: ['body'],
      regex: PHONE_REGEX,
      isRequired: true,
      isNumber: true,
    },

    address: {
      in: ['body'],
      isRequired: true,
      isString: true,
    },

    state: {
      in: ['body'],
      isRequired: true,
      isString: true,
    },

    pincode: {
      in: ['body'],
      isRequired: true,
      isNumber: true,
      length: { value: 6 },
    },

    aadhar: {
      in: ['body'],
      regex: AADHAR_REGEX,
    },

    pan: {
      in: ['body'],
      regex: PAN_REGEX,
    },

    policeStation: {
      in: ['body'],
      isRequired: true,
      isString: true,
    },

    physicalStatus: {
      in: ['body'],
      isRequired: true,
      isBoolean: true,
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

    sex: {
      in: ['query'],
      isIn: SEX,
      isString: true,
    },

    maritalStatus: {
      in: ['query'],
      isIn: MARITAL_STATUS,
      isString: true,
    },

    religion: {
      in: ['query'],
      isIn: RELIGION,
      isString: true,
    },

    category: {
      in: ['query'],
      isIn: CATEGORY,
      isString: true,
    },

    dateOfBirth: {
      in: ['query'],
      regex: DOB_REGEX,
    },

    placeOfBirth: {
      in: ['query'],
      isString: true,
    },

    occupation: {
      in: ['query'],
      isString: true,
    },

    state: {
      in: ['query'],
      isString: true,
    },

    pincode: {
      in: ['query'],
      isNumber: true,
      length: { value: 6 },
    },

    email: {
      in: ['query'],
      regex: EMAIL_REGEX,
      isString: true,
    },

    phone: {
      in: ['query'],
      regex: PHONE_REGEX,
      isNumber: true,
    },

    policeStation: {
      in: ['query'],
      isString: true,
    },

    physicalStatus: {
      in: ['query'],
      isBoolean: true,
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

  delete: {
    id: {
      in: ['params'],
      regex: MONGO_REGEX,
      isRequired: true,
    },
  },
};
