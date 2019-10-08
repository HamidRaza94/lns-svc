import * as path from 'path';
const Datauri = require('datauri');

const imageParser = (file: any) => {
  const datauri = new Datauri();
  const imageString = datauri.format(path.extname(file.originalname).toString(), file.buffer)
  return imageString;
}

export default imageParser;
