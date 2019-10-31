function sumSquareDifference(count) {
  let sumOfSquares = 0;
  let sums = 0;
  for (let i = 1; i < count + 1; i++) {
    sumOfSquares += i * i;
    sums += i;
  }

  return Math.abs(sumOfSquares - sums * sums);
}

const answer = sumSquareDifference(100);
console.log(answer);
