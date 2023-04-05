///////////////TASK_1//////////////////
function generateAnswer() {
  const input = Number(prompt("Enter a valid number please!"));

  if (input % 1 === 0 && input >= 0) {
    console.log(`Number: ${input}`);
    console.log(`Factorial: ${factorial(input)}`);
    console.log(`Square: ${input ** 2}`);
    console.log(`isPrime: ${isPrime(input)}`);
    console.log(`isEven: ${input % 2 === 0}`);
    console.log(`Delimiters: ${delimiters(input)}`);
  } else {
    console.log("Incorrect input!");
    generateAnswer();
  }
}

function factorial(num) {
  let result = 1;

  while (num) {
    result *= num--;
  }
  return result;
}

function isPrime(num) {
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function delimiters(num) {
  const delimiters = [];

  for (let i = num; i > 0; i--) {
    if (num % i === 0) {
      delimiters.push(i);
    }
  }
  return delimiters.length > 0 ? delimiters.join() : "There are no delimiters!";
}

generateAnswer();

///////////////TASK_2//////////////////
function generateSymbols() {
  const inputLetters = prompt("Enter 3 symbols. Spaces are not allowed!");
  const trimedInput = inputLetters.trim();
  const whiteSpace = " ";
  const whiteSpaceValidation = trimedInput.indexOf(whiteSpace);

  if (whiteSpaceValidation === -1 && trimedInput.length > 0 && trimedInput.length < 4) {
    generateNumber(trimedInput);
  } else {
    console.log("Incorrect input!");
    generateSymbols();
  }
}

function generateNumber(inp) {
  const inputNumber = Number(prompt(`Now it's time to give us a valid number from 1 to 9!`));

  if (inputNumber > 0 && inputNumber < 10 && inputNumber % 1 === 0) {
    let pattern = "";

    for (let i = 1; i <= inputNumber; i++) {
      for (let j = 1; j <= inputNumber; j++) {
        pattern += inp + " ";
      }
      pattern += "\n";
    }
    console.log(pattern);
  } else {
    console.log("Incorrect input!");
    generateNumber(inp);
  }
}

generateSymbols();
