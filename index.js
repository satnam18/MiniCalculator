const readline = require('readline-sync');

function add(number1, number2) {
  return (number1 + number2);
}
do {
  console.log(' \n \n Welocme to Mini calculator');
  console.log(' \nEnter the 2 values you want to have operations on :');
  const firstNumber = parseInt(readline.question('First Value : '), 10);
  const secondNumber = parseInt(readline.question('Second Value : '), 10);

  console.log(' \n\n Press 1 for Addition \n Press 2 for Subtraction \n Press 3 for Multiplication \n Press 4 for Division');
  const choice = parseInt(readline.question(), 10);
  let result = 0;

  if (choice === 1) {
    result = add(firstNumber, secondNumber);
  }
  console.log('​The result after the operatiion is : ', result);
} while (true);
