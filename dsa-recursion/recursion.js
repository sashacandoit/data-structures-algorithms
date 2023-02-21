/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestWord = 0) {
  if (i === words.length) return longestWord; //if index reaches length of the array return longestWord
  longestWord = Math.max(words[i].length, longestWord); // assign new value to longestWord - max between length of word at index and longestWord

  return longest(words, i + 1, longestWord); //move on to the next index in the array

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr = "") {
  if (i >= str.length) return newStr;
  newStr += str[i]
  return everyOther(str, i + 2, newStr)
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  //start at first index
  let left = i;

  //find the mirror of the character at current index
  let right = str.length - i - 1;
  
  //once left index crosses right index, return true if nothing else returns false
  if (left >= right) return true;

  //if character at left index does not match character at right index, return false
  if (str[left] !== str[right]) return false;

  //repeat until base plate is reached
  return isPalindrome(str, i + 1);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1, newStr="") {
  if (i < 0) return newStr;
  newStr += str[i]
  return revString(str, i - 1, newStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(objects) {
  let strArr = [];
  for (let key in objects) {
    if (typeof objects[key] === 'string') strArr.push(objects[key])
    if (typeof objects[key] === 'object') strArr.push(...gatherStrings(objects[key]))
  }
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  if (left > right) return -1;

  let middleIdx = Math.floor((left + right) / 2);
  let middleVal = arr[middleIdx];

  if (middleVal === val) {
    return middleIdx;
  }

  if (middleVal < val) {
    return binarySearch(arr, val, left = middleIdx+1, right)
  }

  return binarySearch(arr, val, left, right = middleIdx - 1)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
