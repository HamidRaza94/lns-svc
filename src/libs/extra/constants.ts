// Update Model
const UPDATE_TYPE: string[] = ['news', 'link', 'notice'];

// Regex
const NAME_REGEX: RegExp = /^[a-zA-Z ]*$/;
const EMAIL_REGEX: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const PHONE_REGEX: RegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const DOB_REGEX: RegExp = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;
const AADHAR_REGEX: RegExp = /^\d{4}\s\d{4}\s\d{4}$/;
const PAN_REGEX: RegExp = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
const MONGO_REGEX: RegExp = /^[0-9a-fA-F]{24}$/;

const SEX: string[] = ['male', 'female'];
const CATEGORY: string[] = ['general', 'obc', 'sc', 'st'];

const MARITAL_STATUS: string[] = [
  'single',
  'married',
  'widowed',
  'divorced',
  'separated'
];

const RELIGION: string[] = [
  'christianity',
  'islam',
  'hinduism',
  'buddhism',
  'sikhism',
  'jainism',
  'other'
];

const SUCCESS_RESPONSE = {
  create: 'Successfully Created',
  fetch: 'Successfully Fetched',
  update: 'Successfully Updated',
  delete: 'Successfully Deleted',
}

export {
  UPDATE_TYPE,
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
  CATEGORY,
  SUCCESS_RESPONSE,
};
