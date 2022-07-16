# JavaScript Functions

## Agenda

---

1. Git Basics
1. Review
1. Conditionals
1. Functions

## SWBAT

---

- Understand the difference between declaring and invoking a function
- Implement Function Declarations, Function Expressions, and Arrow Functions
- Explain the difference between Function Declarations, Function Expressions, and Arrow Functions
- Explain the difference between Parameters and arguments
- Explain what First Class Function means
- Implement Higher Order Functions and Callback Functions

## Functions

---

**What Are Functions?**

### A [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value

---

```js
// This is a function declaration
// We have declared what this function will do!
function doSomething() {
  console.log("I did something");
}

// This will reference the function
doSomething;
// => ƒ doSomething() {
//      console.log("I did something");
//    }

// But this function will not execute until you tell it to
doSomething(); // We invoke the function

// Example:
let house = "dirty";
let trash = "full";
let dishes = "dirty";
let floor = "dirty";

function makeMyHouseClean() {
  trash = "empty";
  dishes = "washed";
  floor = "mopped";

  if (trash === "empty" && dishes === "washed" && floor === "mopped") {
    house = "clean";
  } else {
    house = "dirty";
  }
}

// Just saying make my house clean will only tell you how
makeMyHouseClean;
// Now we're talking!
makeMyHouseClean();
// We invoked it and it actually executed the steps to make the house clean!
```

### Scope and Hoisting

---

```js
// global scope
const global = "I am available anywhere";
// global works

if (true) {
  let block = "I am available within this block of code";
  // block works
}
// block doesn't work

function example() {
  let foo = "I have function scope";
  // foo works
}
// foo doesn't work
```

**functions and var are hoisted**
Hoisting refers to the process of the interpreter moving the declaration to the top of the scope.

```js
// Below you can see that although we declare and assign `test` before we try to check it
// test does not error and gives us undefined, as if it has been declared already
// Similarly with function it does the same
// OUTPUTS
test; // undefined
var test = "test";

foo();
function foo() {
  console.log("works");
}
```

### **Difference Between Logging And Returning**

---

```js
// The function from earlier
function doSomething() {
  console.log("I did something");
}
// This function logs "I did Something" but returns undefined

doSomething();
// I did something
// => undefined

function doSomethingFoo() {
  return "I did something";
}
doSomethingFoo();
// => I did something
```

### Argument vs. Parameter

---

- Function [parameters](https://developer.mozilla.org/en-US/docs/Glossary/Parameter) are the placeholder variables listed in the function.
- Function arguments are the real values passed to the function.
- Arguments are initialized to the place holder values we define.

```js
function genericExamples(parameter) {
  return parameter; // returns 'Bar'
}

let argument = "Bar";
genericExample(argument);

// You can also add multiple parameters
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

addTwoNumbers(2, 3);
```

### Different ways to write functions

---

```js
function foo() {
  console.log("foo");
}

// We can assign a function to a variable
const foo = function () {
  console.log("foo");
};

// Arrow functions:
const arrowFoo = (bar) => {
  return `I am an arrow, ${bar}!`;
};
// Can avoid {} if it returns in a single line or with ();
const arrowFoo = (bar) => `I am an arrow, ${bar}!`;

// arrow functions with a single parameter do not need () around the parameter
const arrowFoo = (bar) => `I am an arrow, ${bar}!`;

arrowFoo("function");

              // anonymous functions
const arrowFoo = function(){
  console.log("FOO")
}
              // anonymous functions
const arrowFoo = () => {}
```

### Callbacks

---

Functions in javascript are first class. A function is considered first class if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. [Read more*](https://www.geeksforgeeks.org/what-is-the-first-class-function-in-javascript/#:~:text=First%2DClass%20Function%3A%20A%20programming,a%20first%2Dclass%2Dcitizens.)

```js
let checkings = 1000;
const calcDeposit = (amount) => checkings + amount;
const calcWithdrawal = (amount) => checkings - amount;

const makeTransaction = (calcFunc, amount) => {
  checkings = calcFunc(amount);
  return checkings;
};

// deposit 100
makeTransaction(calcDeposit, 100);
// checkings: 1100

// withdraw 200
makeTransaction(calcWithdrawal, 200);
// checkings: 900
```
