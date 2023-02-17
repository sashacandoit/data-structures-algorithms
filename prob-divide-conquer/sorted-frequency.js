/**
 * Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
 * 
 * Constraints:
 * Time Complexity: O(log N)
 */

function sortedFrequency(arr, val) {
  //find the first index with val
  let firstVal = findFirstVal(arr, val);
  //if no result found, return count of 0
  if (firstVal === -1) return firstVal

  //otherwise find the last index with val
  let lastVal = findLastVal(arr, val);

  //return count by returning difference between index of firstVal and lastVal
  return lastVal - firstVal + 1;

}

function findFirstVal(arr, val, left = 0, right = arr.length - 1) {
  if (right >= left) {
    let mid = Math.floor((right + left) / 2)

    if (arr[mid] === val && (mid === 0 || val > arr[mid - 1])) {
      return mid;
    }
    else if (arr[mid] !== val) {
      return findFirstVal(arr, val, left=mid + 1, right)
    }
    return findFirstVal(arr, val, left, right=mid - 1);
  }
  return -1;
}

function findLastVal(arr, val, left = 0, right = arr.length - 1) {
  if (right >= left) {
    let mid = Math.floor((right + left) / 2)

    if (arr[mid] === val && (mid === arr.length - 1 || val < arr[mid + 1])) {
      return mid;
    }
    else if (arr[mid] !== val) {
      return findLastVal(arr, val, left, right=mid - 1)
    }
    return findLastVal(arr, val, left=mid + 1, right);
  }
  return -1;
}

module.exports = sortedFrequency