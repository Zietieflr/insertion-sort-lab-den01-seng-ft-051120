function findMinAndRemove(array){
  let minimum = array[0];
  let minIndex = 0;
  for(let i=1; i<array.length; i++) {
    if (minimum > array[i]) {
      minimum = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return minimum;
}

function selectionSort(array){
  const sortedArray = [];
  while (array.length !== 0) {
    sortedArray.push(findMinAndRemove(array));
  }
  return sortedArray;
}
