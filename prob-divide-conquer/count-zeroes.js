/**
 * countZeroes
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
 * 
 * Constraints:
 * Time Complexity: O(log N)
 */

function countZeroes(arr) {
  //find the first 0 index
  let firstZero = findFirstZero(arr)
  //if no result found, return count of 0
  if (firstZero === -1) return 0;
  //return count by returning difference from index of firstZero and length of arr
  return arr.length - firstZero;
}

function findFirstZero(arr, left=0, right=arr.length-1) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2)
    //if mid index is 0 or value of mid index is 0 and left of mid is 1, return first 0 index
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    }//if value at mid is 1, repeat and move left index to mid + 1
    else if (arr[mid] === 1) {
      return findFirstZero(arr, left = mid + 1, right)
    }
    //if value at mid index is 0 and mid idx - 1 is also 0, repeat and move right index to mid-1
    return findFirstZero(arr, left, right = mid - 1)
  }
  //if no result, return -1
  return -1
}

countZeroes([1, 1, 1, 1, 1, 0, 0, 0])

module.exports = countZeroes