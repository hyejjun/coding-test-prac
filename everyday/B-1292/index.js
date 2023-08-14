/**
 * @ 백준 1292
 * https://www.acmicpc.net/problem/1292
 */

let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split(' ');

const solution = arr => {
  const save = [];
  for (let i = 1; i <= 1000; i++) {
    for (let j = 0; j < i; j++) save.push(i);
    if (save.length >= arr[1]) break;
  }

  return save.slice(arr[0] - 1, arr[1]).reduce((x, y) => x + y, 0);
};

console.log(solution(input));