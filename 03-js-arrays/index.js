// =============================================================================
// Function review
// =============================================================================

// What is a function?

// a block a code and runs what ever function
// a process to be executed.
// something that gets passed 0, 1, or more pieces of info, and does something and/or returns something back
// num1 - params
// function doSomething(parameter){
//     console.log(parameter)
//     // undefined until we return
//     return parameter
// }

// Hoisting? functions get hoisted var it also get hoisted
// when you call the function before declare

// isHoisted()
// function isHoisted(){
//     console.log("hoist")
// }

// console.log(isHoisted);
// isHoisted = 6;

// declaration of the variable
// var isHoisted = 5;

// console.log(isHoisted())
// var isHoisted = function(){
//     console.log("something")
// }

// Scope

// global scope

// outside of any function or block of code
// const global = "global"
// function rand(){
//     const fooVar = "block || function scope"
// }

// // curly braces we are in block
// if(true){
//     //
//     const ifVar = "block"
// }

// false && oasindoasin;

// function doSomething(){
//     // return 1+2;
//     console.log("eri");
//     return 'eri'
// }

// function doSomething(){

// }

// const doSomething = () => {
//     return 1+3
// }

// // THIS RETURNS 1+3
// const doSomething = () => 1+3;

// CallBacks
// =============================================================================

// let checking = 1000;

// // what arg it takes in : amount -> Number || String
// // what it returns : checking + amount -> Number
// const calcDeposit = (amount) => checking + Number(amount);

// // what arg it takes in : amount -> Number || String
// // what it returns : checking - amount -> Number
// const calcWithdrawal = (amount) => checking - Number(amount);

// // Checking was not changed because we never assigned checking to anything
// // NEVER DID: checking = checking - Number(amount);

// //
// const makeTransaction = (calcFunc, amount) => {
//     checking = calcFunc(amount); // calcDeposit or calcWithdrawal
//     return checking;
// };

// // DEPOSIT 1000;
// makeTransaction(calcDeposit, 1000);
// makeTransaction(calcWithdrawal, 3000);

// const callback = () => {
//     console.log("I WILL BE USED IN THE ARGUMENT OF ANOTHER")
// }

// const doSomething = (cb) => {
//     cb(); // execute some other function that is defined elsewhere and CALL IT BACK!
// }

// doSomething(callback);

// MULTIPLE CHOICE QUESTION:
// let bank = 1000;
// // console.log(bank); 1000
// const calcDeposit = (amount) => bank + amount;
// const calcWithdrawal = (amount) => bank - amount;
// //       atm(calcWithdrawal, 500);
// const atm = (action, amount) => {
//     bank = action(amount);
//     // bank = 500
//     const ans = `Your remaining balance is ${bank}`
//     console.log(ans);
//     return ans;
// }

// atm(calcWithdrawal, 500);

// WHAT WILL `atm(calcWithdrawal, 500)` return?
//
// A. 500
// B. Your remaining balance is 1500
// C. undefined
// D. Your remaining balance is 500

// Making an array
// =============================================================================
// Array Methods
// =============================================================================

// ()
// {}
// arrNum[0]
// 1
// arrNum[1]
// 2
// arrNum
// (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)
// arrNum.length
// 3
// arrNum[3]
// undefined
// [1,2,3]
// (3) [1, 2, 3]
// arrNum[arrNum.length-1]
// 3
// arrNum[arrNum.length]
// undefined

// const arr = [
//     "Alma Perez Bautista",
//     "Carla Sachetti",
//     "Elna Jean-Pierre",
//     "Frantz Moseau",
//     "Loren Sprague",
//     "Sendi Todoric",
//     "Michael Loseto",
//   ]

// ARRAY METHODS

// ADDING THE THE END OF THE ARRAY
arr.push("Eri Guzman");

// ADDING TO THE BEGINNING THE ARRAY

// arr[0]
// 'Alma Perez Bautista'
// arr[0] = "ERIBERTO"
// 'ERIBERTO'
// arr
// (8) ['ERIBERTO', 'Carla Sachetti', 'Elna Jean-Pierre', 'Frantz Moseau', 'Loren Sprague', 'Sendi Todoric', 'Michael Loseto', 'Eri Guzman']0: "ERIBERTO"1: "Carla Sachetti"2: "Elna Jean-Pierre"3: "Frantz Moseau"4: "Loren Sprague"5: "Sendi Todoric"6: "Michael Loseto"7: "Eri Guzman"length: 8[[Prototype]]: Array(0)
// arr.unshift('Alma Perez Bautista')
// 9

// SETTING AT AN INDEX
arr[arr.length - 1] = "Eriberto Guzman";

// const arr = [
//     "Alma Perez Bautista",
//     "Carla Sachetti",
//     "Elna Jean-Pierre", 2
//     "Frantz Moseau",    3
//     "Loren Sprague",    4
//     "Sendi Todoric",    5
//     "Michael Loseto",
//     "Eriberto Guzman"
//   ]

// DESTRUCTIVE (IN PLACE) CHANGING THE ARRAY
// arr.push(1)
// arr.unshift(1)
// arr[1] = 2
// arr.splice(1, 2)
//  arr.splice(1, 0, ["Carla Sachetti", "Elna Jean-Pierre"])

// NON-DESTRUCTIVE ( Out of Place)  CHANGE THE ARRAY

// Makes a new array copy
// const slice = arr.slice(2, 5)
// const copyArr = [...arr]
// const copy2 = arr.concat();

// ...arr
//
// Looping through Arrays
// =============================================================================

// WHILE LOOP

// while(false){
//     bank = bank - 1;
//     console.log("CHECK BALANCE: ", bank)
// }

//  i++
// i = i + 1

// FOR LOOPS
// length = 5

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// for(let idx in numsArr){
//     console.log(idx, typeof idx)
// }

// for(let idx in arr){
//     console.log(arr[idx])
// }

// for(let element of arr){
//     console.log(element);
// }

// High Order Functions and JavaScript Array Iteration
// =============================================================================

// What is a higher order function?
// const numsArr = [1,2,3,4,5]

let bank = 1000;

const calcDeposit = (amount) => bank + amount;
const calcWithdrawal = (amount) => bank - amount;

const atm = (action, amount) => {
  // debugger;
  bank = action(amount);
  // bank = 500
  const ans = `Your remaining balance is ${bank}`;
  console.log(ans);
  return ans;
};

// atm(calcDeposit, 5);
// atm(calcDeposit, 10);
// atm(calcDeposit, 20);
// atm(calcDeposit, 50);

// for(let bill of bills){
//     atm(calcDeposit, bill)
// }
// Examples of using higher order functions
// Array iterations: array functions that expect other functions.
// RETURN VALUE: undefined
// const bills = [5,10,20,50];
// const logBill = (bill) => console.log(bill)
// const multiplyBy2 = (bill) => {
//      return bill * 2
// }
// bills.forEach(logBill)
// RETURNS: COPY OF AN ARRAY WITH THE RETURN VALUES
// console.log(bills.map(multiplyBy2))
// FILTER

// const bills = [5,10,20,50];

// function remove5(bill){
//     return bill !== 5
// }
// console.log(bills)
// console.log(bills.filter(remove5));
// function find5(bill){
//     return bill === 5
// }

// console.log(bills.find(find5))

// MULTIPLE CHOICE QUESTION:
// WHICH ONE OF THESE STATEMENTS ARE INCORRECT?
//
// A. map returns a new array
// B. filter returns the first element that it finds
// C. forEach returns undefined
// D. forEach cannot be stopped by a break statement
