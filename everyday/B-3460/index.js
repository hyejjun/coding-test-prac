/**
 * @ 백준 2501
 * https://www.acmicpc.net/problem/2501
 */

let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split(' ');

let arr = [];
const [N, K] = [...input];

for (let i = 1; i < N; i++) {
  if (N % i === 0) {
    arr.push(i)
  }
}

console.log(arr[K - 1] ? arr[K - 1] : 0);