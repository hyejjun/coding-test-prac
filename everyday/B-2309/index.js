/**
 * @ 백준 2309
 * https://www.acmicpc.net/problem/2309
 */

let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

// console.log(input);

let sum = 0;
let arr = [];

input.map((v) => {
  if (sum <= 100) {
    sum += v;
    arr.push(v)
  }
})

let result = arr.sort(function (a, b) { return a - b; })

console.log(sum);

result.map((v) => { console.log(v); })