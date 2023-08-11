/**
 * @ 백준 10870
 * https://www.acmicpc.net/problem/10870
 */

let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim();

/**
 * Fn = Fn-1 + Fn-2 (n ≥ 2)
 * 이렇게 공식이 나와있기 때문에... 이대로 쓰자
 */

let n = Number(input)
function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(n));