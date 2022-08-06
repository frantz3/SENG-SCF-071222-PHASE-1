const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.find((n) => {
  return n === 3;
});

function average(arr) {
  /* 
    .reduce takes in two arguments
    a callback and an initial value
    then it iterates through ever
    element in the array and adds
    that number to the sum
    then returns the sum
  */
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

function contains_avg(arr) {
  const avg = average(arr);
  return arr.includes(avg);
}

const a = [2, 3, 4, 5, 6];
const b = [2, 3, 4, 5, 100];

contains_avg(a);
// => returns true
contains_avg(b);
// => returns false

function linear_search(arr, target_num) {
  const foundNum = arr.find((num, idx) => {
    if (num === target_num) {
      return true;
    } else {
      console.log(`Remaining elements to search: ${arr.length - idx}`);
    }
  });

  return foundNum ? true : false;
}

function binary_search(arr, target) {
  console.log(`Remaining elements to search: ${arr.length}`);
  // The case that we're looking at one item
  if (arr.length <= 1) {
    return arr[0] === target ? target : false;
  }

  // Find the middle item in the array
  const midpoint = Math.floor(arr.length / 2); // Make sure to floor the value
  const middleElem = arr[midpoint];

  /*
    If the middle item is the target, we can return it.
    Otherwise, if the target is less than the midpoint 
    Throw out all of the items to the right of it and run this method again
    otherwise, throw out all the items to the left of it and run this method again
  */
  if (middleElem === target) {
    return target;
  } else if (middleElem >= target) {
    return binary_search(arr.slice(0, midpoint), target);
  } else {
    return binary_search(arr.slice(midpoint, arr.length), target);
  }
}

// Example 1:
hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10);
// should return
// [[-1,11], [3,7]]

// it is fine if you return repeats
// for example: [[-1,11], [3,7], [11, -1], [7,3]]

// Example 2:
hasTargetSum([22, 19, 4, 6, 30, -6], 25);
// returns
// [[19, 6]] or [[19, 6], [6, 19]]

function hasTargetSum(arr, target) {
  const results = [];
  arr.forEach((currentNum) => {
    arr.forEach((nextNum) => {
      if (currentNum + nextNum === target) {
        results.push([currentNum, nextNum]);
      }
    });
  });

  return results;
}

function hasTargetSumLinear(arr, target) {
  let results = [];
  let history = {};

  arr.forEach((current) => {
    const remainder = target - current;
    if (remainder in history) {
      results.push([current, remainder]);
    }
    history[remainder] = true;
  });

  return results;
}

// https://docs.google.com/presentation/d/11EJj_5n8bT_yx-Nip736MsdXIZgsfP2k-R7FkoOs9Y0/edit#slide=id.p
