/* 
  Create a function that works just like a calculator
  Your function should accept three arguments, two numbers, and a string.
  Operations that your function should be able to complete
  [] Addition
  [] Subtraction
  [] Division
  [] Multiplication
  [] Raise to a the power of

  Feel free to use google to figure out any expressions you have not yet practiced.
  This will not be graded, feel free to use live server and your google console to test your code.

  HINT: look up switch statements


  EXPECTED RESULT:
  myCalculator('+', 1, 2)   => 3
  myCalculator('-', 1, 2)   => -1
  myCalculator('*', 1, 2)   => 2
  myCalculator('/', 4, 2)   => 2
  myCalculator('^', 2, 3)   => 8


  BONUS: Allow for number inputs to be either String or Number
*/
// Write your code here
// function myCalculator(operator, num1, num2) {
//   let operator = '+';
//   return `${num1} ${operator} ${num2}`;
// }
// myCalculator(operator, 1, 2);

function myCalculator(operator, num1, num2) {
  switch (operator) {
    case '+' :
      return num1 + num2;
      break;

      case '-' :
      return num1 - num2;
      break;

      case '*' :
      return num1 * num2;
      break;

      case '/' :
      return num1 / num2;
      break;

      case '^' :
      return num1 ^ num2;
      break;
      
      default: 
        return console.log('Not an operator');
  }
}
console.log(myCalculator('+', 1, 2));
