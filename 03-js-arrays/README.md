# JavaScript Arrays

# AGENDA

---

- Open Office Hours Discussion / Daily Stand up
  - First week recap
- Pair Programming
- Questions / Lessons and Lab Practice
- Review
- Callbacks
- Arrays

## SWBAT

---

- Create arrays
- Access elements from arrays
- Add / Remove elements to arrays
- Use forEach to loop through arrays
- Use map to return a transform arrays
- Use filter and find to find specific elements

## What is an Array?

An array is a list-like object with indexes and elements. Each element is paired with an index, starting at 0.

```js
// Here ways to define an array
let arrLength = 4;
const arr = new Array(arrLength); // makes an arr w/ 4 empty values
const arr = new Array(1, 2, 3, 4);
const arr = [];
const arr = [1, 2, 3, 4];

// Access elements within an array
arr[0]; // use bracket notation to access element at index of 0

// Adding items to arrays
arr.push(5); // [1,2,3,4,5] -- Adds to the end of the arr
arr.unshift(0); // [0,1,2,3,4,5] -- Adds to the beginning of the arr

// At index 1, delete 0 items, adds 5 and 6 and mutates the array
arr.splice(1, 0, 5, 6); // [0, 5, 6, 1, 2, 3, 4, 5]

// Start at 2 and create a slice up to but not including index 4
arr.slice(2, 4); // [6,1] -> Does not modify original array

// Making a copy
arr2 = [...arr];
arr3 = [...arr, 7]; // Adds 7 to the end of the copied array
```

## Looping Through Arrays

---

```js
// For Loop that loops through the index of each element in the array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Loops through every element OF the array
for (let element of arr) {
  console.log(element);
}

// Loops through the INdexes of the Arr
for (let idx in arr) {
  console.log(arr[idx]);
}
```

## High Order Functions and JavaScript Array Iteration

---

A Higher order function is just a function accepts functions as parameters and/or returns a function.

```js
// forEach loops through EACH element in the array
// ---------------------------------------------------------------------
// RETURN: undefined
arr.forEach((el) => console.log(el));
// ---------------------------------------------------------------------

// map calls the callback on every element in the array one at a time
// ---------------------------------------------------------------------
// RETURN: a new array filled with the return value of the callback
arr.map((num) => num + 2);

// filter also creates a new array, with an element if the callback returns true
// ---------------------------------------------------------------------
// RETURN: new array with any element that makes the callback return true
arr.filter((num) => num % 2 === 0); // new array will only consist of even numbers

// find is similar to filter but it only returns one
// ---------------------------------------------------------------------
// RETURN: The first element that makes the callback return true
arr.find((num) => num % 2 === 0); // the first even number
```
