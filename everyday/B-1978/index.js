/**
 * @ 백준 1978
 * https://www.acmicpc.net/problem/1978
 */

let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')

let arr = input[1].split(' ').map(Number)

const checkAns = (v) => {
  if (v === 1) return false;

  for (let i = 2; i * i <= v; i++) {
    if (v % i == 0) return false;
  }

  return true;
}

const answer = arr.filter((num) => checkAns(num));

console.log(answer.length);
