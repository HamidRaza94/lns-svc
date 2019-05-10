const arrayMerger = (arr1, arr2, arr3) =>
  arr1.map(arr1Item => ({
    ...arr2.find(item => item.id === arr1Item.id && item),
    ...arr1Item,
    ...arr3.find(item => item.id === arr1Item.id && item)
  }));

export { arrayMerger };
