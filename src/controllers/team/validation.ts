import { validationRule } from '../../libs';
import { REGEX, SEX, MARITAL_STATUS, RELIGION, CATEGORY } from '../../libs/constants';

export default {
  create: {
    name: validationRule.byRegex.inBody(REGEX.alpha),
    fatherHusbandName: validationRule.byRegex.inBody(REGEX.alpha),
    sex: validationRule.isIn.inBody(SEX),
    maritalStatus: validationRule.isIn.inBody(MARITAL_STATUS),
    religion: validationRule.isIn.inBody(RELIGION),
    category: validationRule.isIn.inBody(CATEGORY),
    dateOfBirth: validationRule.byRegex.inBody(REGEX.dob),
    placeOfBirth: validationRule.string.inBody(),
    occupation: validationRule.string.inBody(),
    email: validationRule.byRegex.inBody(REGEX.email),
    phone: validationRule.byRegex.inBody(REGEX.phone),
    address: validationRule.string.inBody(),
    state: validationRule.string.inBody(),
    pincode: {
      ...validationRule.number.inBody(),
      length: { value: 6 },
    },
    aadhar: validationRule.byRegex.inBody(REGEX.aadhaar),
    pan: validationRule.byRegex.inBody(REGEX.pan),
    policeStation: validationRule.string.inBody(),
    physicalStatus: validationRule.boolean.inBody(),
  },

  read: {
    id: validationRule.byRegex.inParams(REGEX.mongo),
    name: validationRule.byRegex.inQuery(REGEX.alpha),
    fatherHusbandName: validationRule.byRegex.inQuery(REGEX.alpha),
    sex: validationRule.isIn.inQuery(SEX),
    maritalStatus: validationRule.isIn.inQuery(MARITAL_STATUS),
    religion: validationRule.isIn.inQuery(RELIGION),
    category: validationRule.isIn.inQuery(CATEGORY),
    dateOfBirth: validationRule.byRegex.inQuery(REGEX.dob),
    placeOfBirth: validationRule.string.inQuery(),
    occupation: validationRule.string.inQuery(),
    email: validationRule.byRegex.inQuery(REGEX.email),
    phone: validationRule.byRegex.inQuery(REGEX.phone),
    state: validationRule.string.inQuery(),
    pincode: {
      ...validationRule.number.inQuery(),
      length: { value: 6 },
    },
    policeStation: validationRule.string.inQuery(),
    physicalStatus: validationRule.boolean.inBody(),
    ...validationRule.limitSkip,
  },

  update: {
    id: validationRule.byRegex.inParams(REGEX.mongo),
    dataToUpdate: validationRule.object.inBody(),
  },

  delete: {
    id: validationRule.byRegex.inParams(REGEX.mongo),
  },
};
