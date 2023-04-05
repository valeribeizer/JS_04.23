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
  };
};

function factorial(num) {
  let result = 1;
  
  while (num) {
    result *= num--;
  };
  return result;
};

function isPrime(num) {
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      return false;
    };
  };
  return true;
};

function delimiters(num) {
  const delimiters = [];

  for (let i = num; i > 0; i--) {
    if (num % i === 0) {
      delimiters.push(i);
    };
  };
  return delimiters.length > 0 ? delimiters.join() : "There are no delimiters!";
};

generateAnswer();
