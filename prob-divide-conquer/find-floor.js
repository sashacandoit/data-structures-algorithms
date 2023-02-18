/**
 * findFloor
 * Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
 * 
 * Constraints
 * Time Complexity: O(log N)
 * 
 * Examples:
 * findFloor([1,2,8,10,10,12,19], 9) // 8
 * findFloor([1,2,8,10,10,12,19], 20) // 19
 * findFloor([1,2,8,10,10,12,19], 0) // -1
 * */

function findFloor(arr, val) {
  //find num in arr that is equal to or less than val
  //same as find val but instead of exact match, find match or less than

  let start = 0;
  let end = arr.length - 1
  
  while (start <= end) {
    let midIdx = Math.floor((start + end) / 2);
    let midVal = arr[midIdx];

    if (val >= arr[end]) {
      return arr[end]
    }
    else if (midVal <= val && val < arr[midIdx + 1]) {
      return midVal;
    }
    else if (midVal > val) {
      end = midIdx - 1;
    }
    else {
      start = midIdx + 1
    }
  }
  return -1
}

module.exports = findFloor