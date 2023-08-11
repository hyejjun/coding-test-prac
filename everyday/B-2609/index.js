/**
 * @ 백준 2609
 * https://www.acmicpc.net/problem/2609
 */

let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split(' ').map(Number);

let i = input[0]
let j = input[1]

while (i % j) {
  let n = i % j;
  if (n !== 0) {
    i = j;
    j = n;
  }
}

console.log(j);
console.log(input[0] * input[1] / j);