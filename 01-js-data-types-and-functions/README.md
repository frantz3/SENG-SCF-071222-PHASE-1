# Data Types and Functions

## SWABTs (short for `Students Will Be Able To`)

* Use logging and debugging tools in JavaScript (console.log / debugger)
* Define all 7 [JavaScript Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types)
* Implement JavaScript Conditionals

## Debugging
- **Comments**
```js
// creates a normal comment
/*
    Creates a comment block!

    Don't forget to close it!!!
*/

// To comment out multiple lines of code,
// highlight multiple lines and hold down
// ctrl + /             for windows
// cmd + /              for macOS
```
> Comments can be denoted with double forward slash ('//') 
> You can start a comment block with forward slash and star ('/* */')
> Make sure to close your comment block with star forward slash


<br/><br/>


- **console.log / console.warn / console.error / console.table**
```js
// A method that outputs to your node terminal or console. (DOES NOT RETURN A VALUE)
console.log('Welcome to SCF Day 1');

// Methods that color your log to help you debug your code. 
// Useful when you have a ton of console logs, and you want to differentiate
// Note: These are decorators for your logging not real errors (We will learn how to throw errors later)
console.warn('Warning you should try this in your console')
console.error('I have detected you have not tried this in your console')

// Copy and paste this into your console on google chrome
console.table(['this','is','a','collection','of','words'])
```


<br/><br/>


- **debugger**
```js
// Debugger stops the execution of your code and allows you to
// Test code at that point in the code
// Anything defined above it will exist 
// Anything defined below it will not have executed yet
                            // OUTPUT
console.log('Step1');       // Step1
console.log('Step2');       // Step2
debugger                    
console.log('step3');       // does not execute because of debugger
```


<br/><br/>

## JavaScript Types
- **Strings**

```js
// Used for characters
'this is a string'
"I can be written like this"
`Or this as well`

// If you want to make a string Dynamic use String Interpolation
`${1+3} is my favorite number`

```

<br/><br/>


- **Number** && **BigInt**
```js
// Integers (1), Floats (1.1) -> (Real numbers) -> Number
// The maximum safe integer in JavaScript (2^53 - 1). -> Number.MAX_SAFE_INTEGER
// You can denote Infinity and negative Infinity in JS
// NaN(Not a number) has the datatype of number
                    // OUTPUTS:
typeof 1            // 'number'
typeof 1.1          // 'number'
typeof Infinity     // 'number'
typeof -Infinity    // 'number'
typeof NaN          // 'number'

// Convert to Number you can use:
parseInt('1.1')     // 1    
Number('1.1')       // 1.1  

```
<br/><br/>

- **Undefined**
```js
// Has been assigned to variable that has been declared but not assigned a value
let a
undefined

```


<br/><br/>

- **Null**
```js
// specifically the absence of a value
```

<br/><br/>

- **Booleans**
```js
true
false

// Truthy Values -> All of these return true
listOfTruthyValues = [
    !!true,
    !!{},
    !![],
    !!4,
    !!'a string'
    !!Infinity
]

// Falsy Values -> All of these return false
listOfFalsyValues = [
    !!0,
    !!"",
    !!null,
    !!undefined,
    !!NaN
]

```

<br/><br/>

- **Symbols**
```js
// Used to add unique property keys to an object
```

<br/><br/><br/>

## Variables

- **What is a Variable?**
```js
// A variable is a way to store information to be referenced by programs
```


<br/><br/>

- **var || let || const**
```js
// Stay away from using var
var SchrödingerCat = 'could be defined'

// Variables defined with const are constant and cannot be reassigned
const eri = 'eri'

// variables defined with let can be reassigned
let status = 'learning to be a dev'
status = 'Am a dev'

```

<br/><br/>

## Conditionals

- **if / if else / else if**
```js
if (true) {
    // do something
}

if ( tests === "passing" ){
    console.log("Done")
}else{
    // This code runs when the if statement above fails
    // It's like saying:
    // If my test are passing log done
    // otherwise keep studying
    console.log("Keep Studying")
}

// An if else can have more conditions

if(dog === "happy"){
    console.log("pet dog")
}else if(dog === "hungry"){
    console.log("feed dog")
}else{
    console.log("walk dog")
}

```

<br/><br/><br/>



