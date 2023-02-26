function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);

  //call merge sort on the left half until the legth is less than or equal to 1
  const left = mergeSort(arr.slice(0, mid));

  //call merge sort on the right half until the length is less than or equal to 1
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort};