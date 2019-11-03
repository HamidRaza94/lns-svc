const arrayMerger = (arr1, arr2, arr3, arr4) =>
  arr1.map(arr1Item => ({
    ...arr2.find(item => item.id === arr1Item.id && item),
    ...arr1Item,
    ...arr3.find(item => item.id === arr1Item.id && item),
    ...arr4.find(item => item.id === arr1Item.id && item),
  }));

const filterDefinedObject = (obj: any) => {
  const filteredObj = {};

  for (const key in obj) {
    if(obj[key]) {
      filteredObj[key] = obj[key];
    }
  }

  return filteredObj;
}

const toInt = (data: any) => {
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

export { arrayMerger, filterDefinedObject, toInt };
