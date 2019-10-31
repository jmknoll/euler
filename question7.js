//10001st prime

function findNthPrime(n) {
  let primeNumbers = [];

  let counter = 2;
  while (primeNumbers.length < n) {
    if (isPrime(counter)) {
      primeNumbers.push(counter);
    }
    counter++;
  }
  return primeNumbers[n - 1];
}

function isPrime(val) {
  for (let i = 2; i < val; i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return val > 1;
}

let result = findNthPrime(10001);
console.log(result);
