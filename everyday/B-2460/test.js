/**
 * @ 백준 2460
 * https://www.acmicpc.net/problem/2460
 */

let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split('\n');

let max = 0;
let train = 0;

for (let i = 0; i < input.length; i++) {
  const [off, on] = input[i].split(" ").map(Number);

  train = train + on - off

  if (max < train) {
    max = train;
  }
}

console.log(max);