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

export { arrayMerger, filterDefinedObject };
