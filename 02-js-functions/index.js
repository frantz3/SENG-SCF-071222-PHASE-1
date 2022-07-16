// =============================================================================
// JavaScript Types
// true 
// false

// let data; // 2hrs

// data && data.doSomething()

// console.log(!!data) // data is undefined

// console.log(Infinity > 123091283018203981203981209381290)

// &&
// console.log(false && oaisdnasiodnasoidnasiodno)
// &&
// ||
// ==
// ===
// <=
// >=

// console.log(10 < 4)

// let x = 1
// let y = '1'

// console.log(x === y)
// assignment
// =

// =============================================================================
// var let and const
// console.log(eri)
// var eri = "eri";
// const -> constant 

// var 

// =============================================================================
// conditionals
let bank = 20000;

function addToBank(num){
    return bank + num
}

addToBank(1000)
// if (classRoom === "open"){
//    console.log("Go IN!")
// } else if(haveKey){
//     console.log("UnlockDoor!")
// } else{
//     console.log("GO Home!")
// }
    
            // ternary 
            
// let classRoom = "open"
// let haveKey = true;

// if(classRoom === "open"){
//     console.log("GoIN")
// }else{
//     console.log("Go Home")
// }
// // Expression        ?      true           :        false
// classRoom === "open" ? console.log("GoIn") : console.log("Go Home")


// =============================================================================
// FUNCTIONS


// Try These two Commands in the console
// changeTitle("Your Text")
// sendToPage("Your Text")
// =============================================================================
// What Are Functions?
// SET OF INSTRUCTIONS
// D R Y
// Do not Repeat Yourself


// function doSomething(){
//     console.log("hello")
//     console.log("world")
//     console.log("!")
// }

// doSomething();

// let house = "dirty";
// let trash = "full";
// let dishes = "dirty";
// let wall = "dirty";

// // const eri = 1;
// function makeMyHouseClean() {
//   trash = "empty";
//   dishes = "washed";
//   wall = "mopped";

//   if (trash === "empty" && dishes === "washed" && wall === "mopped") {
//     house = "clean";
//   } else {
//     house = "dirty";
//   }
// }

// function cleanHouse(){
//     trash = "empty"
// }

// // invoke my moms way of cleaning house
// makeMyHouseClean();

// // my way, my set of instructions
// cleanHouse();




// =============================================================================
// Scope and Hoisting

// Hoisting moving declaration is moved up to the top of the scope
// console.log(num);
// var num = 1;


// console.log(foo())
// function foo(){
//     console.log('foo')
// }
// let global = "GLOBAL SCOPE"

// if(true){
//     let block = "BLOCK SCOPE"  
// }

// function doSomething(){
//     console.log(global)
//     let fooScope = "FUNCTION SCOPE"
// }
// // console.log(fooScope);

// doSomething();

// =============================================================================
// Log vs. Return
// =============================================================================

// function doSomething(){
//     console.log("Hello")
//     return "Hello"
// }

// function AddOnePlusTwo(){
//     let three = 1+2
//     console.log(three)
//     return three
// }

// let three = AddOnePlusTwo();


// console.log(doSomething())


// Argument vs. Parameter
// =============================================================================

// Parameters are local variables that are used inside of our functions. Placeholders

// // Arguments are the actual values passed into the function
// let bank = 20000;

// function doSomething(parameter){
//     return parameter
// }

// doSomething("VALUE")


// //       addToBank(1000, 100)
// function addToBank(num, check){
//     return bank + num - check
// }

// addToBank(1000, 100)


// Different Types of Functions -- Arrow Functions
// =============================================================================
// In JS functions are first Class
// First class it is treated like any other value

// const doSomethingFoo = 5

// Will this function be hoisted?
// The Variable will not be hoisted!

// doSomething();

// NOT HOISTED
//               Annonymous function
// const doSomething = function(){
//     console.log("do something")
// }

// HOISTED

// Difference:
// function
// =
// => 


// function doSomething(){
//     console.log("do something")
// }

// const doSomething = () => {
//     console.log("do something")
// }

// Remember if your going a single line arrow function
// What ever comes after the arrow is what you return
// If you have only 1 parameter don't need perenthesis
// If you have more than 1 you don't need perenthesis


// Callbacks
// =============================================================================
// WHAT IS A CALLBACK? <=====

// const doSomething = (num, num1) => `RETURNS ${num}`

// doSomething();

// const anotherFoo = (callback) => {
//     callback();
// }

// anotherFoo(doSomething)




