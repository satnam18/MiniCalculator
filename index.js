const readline = require('readline-sync');

function add(number1, number2) {
  return (number1 + number2);
}

function subtract(number1, number2) {
  return number1 > number2 ? number1 - number2 : number2 - number1;
}

function multiply(number1, number2) {
  return (number1 * number2);
}

function divide(number1, number2) {
  return number2 !== 0 ? number1 / number2 : 'Denominator can not be zero';
}

do {
  console.log(' \n \n Welocme to Mini calculator');
  console.log(' \nEnter the 2 values you want to have operations on :');
  const firstNumber = parseFloat(readline.question('First Value : '), 10);
  const secondNumber = parseFloat(readline.question('Second Value : '), 10);

  console.log(' \n\n Press 1 for Addition \n Press 2 for Subtraction \n Press 3 for Multiplication \n Press 4 for Division');
  const choice = parseInt(readline.question(), 10);
  let result = 0;

  if (choice === 1) {
    result = add(firstNumber, secondNumber);
  } else if (choice === 2) {
    result = subtract(firstNumber, secondNumber);
  } else if (choice === 3) {
    result = multiply(firstNumber, secondNumber);
  } else if (choice === 4) {
    result = divide(firstNumber, secondNumber);
  }


  console.log('​The result after the operatiion is : ', result);
} while (true);
