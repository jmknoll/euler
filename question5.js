// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function findSmallestMultiple(nums) {
  let found = false;
  let start = 0;
  while (!found) {
    start++;
    let dividesCleanly = true;
    for (let i = 0; i < nums.length; i++) {
      if (start % nums[i] !== 0) {
        dividesCleanly = false;
      }
    }
    if (dividesCleanly) {
      found = true;
      return start;
    }
  }
}

const vals = [...Array(21).keys()].slice(1);
let answer = findSmallestMultiple(vals);
console.log(answer);
