export const arrayMerger = (arr1, arr2, arr3, arr4) =>
  arr1.map(arr1Item => ({
    ...arr2.find(item => item.id === arr1Item.id && item),
    ...arr1Item,
    ...arr3.find(item => item.id === arr1Item.id && item),
    ...arr4.find(item => item.id === arr1Item.id && item),
  }));

  export const filterDefinedObject = (obj: any) => {
  const filteredObj = {};

  for (const key in obj) {
    if(obj[key]) {
      filteredObj[key] = obj[key];
    }
  }

  return filteredObj;
}

export const toInt = (data: any) => {
  if (data && typeof data === 'number') {
    return data;
  } else {
    let convertedData = {};
    if (data && typeof data === 'string') {
      convertedData = parseInt(data);
    } else if (data && typeof data === 'object') {
      for (const key in data) {
        if (data[key] && typeof data[key] === 'number') {
          convertedData[key] = data[key];
        } else if (data[key] && typeof data[key] === 'string') {
          convertedData[key] = parseInt(data[key]);
        }
      }
    }
    
    return convertedData;
  }
}

const isObject = (value: any): boolean => {
  return typeof value === 'object' &&
    !Array.isArray(value) &&
    value !== null;
};

interface IExtractFields {
  [key: string]: any;
}

export const extractFields = (data: any, fields: string[]): IExtractFields => {
  const newData = {};

  if (!data ||!isObject(data)) {
    return newData;
  }

  for (const key in data) {
    if (fields.includes(key)) {
      newData[key] = data[key];
    }
  }

  return newData;
};
