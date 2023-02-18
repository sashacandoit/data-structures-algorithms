/**
 * Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
 * 
 * Constraints:
 * Time Complexity: O(log N)
 * 
 * examples:
 * sortedFrequency([1,1,2,2,2,2,3],2) // 4
 *                  S     M     E
 * sortedFrequency([1,1,2,2,2,2,3],3) // 1
 * sortedFrequency([1,1,2,2,2,2,3],1) // 2
 * sortedFrequency([1,1,2,2,2,2,3],4) // -1
 */

function sortedFrequency(arr, val) {
  let firstVal = findFirstVal(arr, val);
  if (firstVal === -1) return firstVal

  let lastVal = findLastVal(arr, val);
  return lastVal - firstVal + 1;
}

function findFirstVal(arr, val, start = 0, end = arr.length - 1) {
  if (end >= start) {
    let mid = Math.floor((end + start) / 2)

    if (arr[mid] === val && (mid === 0 || val > arr[mid - 1])) {
      return mid;
    }
    else if (arr[mid] < val) {
      return findFirstVal(arr, val, start = mid + 1, end)
    }
    return findFirstVal(arr, val, start, end = mid - 1);
  }
  return -1;
}

function findLastVal(arr, val, start = 0, end = arr.length - 1) {
  if (end >= start) {
    let mid = Math.floor((end + start) / 2)

    if (arr[mid] === val && (mid === arr.length - 1 || val < arr[mid + 1])) {
      return mid;
    }
    else if (arr[mid] > val) {
      return findLastVal(arr, val, start, end = mid - 1)
    }
    return findLastVal(arr, val, start = mid + 1, end);
  }
  return -1;
}

module.exports = sortedFrequency