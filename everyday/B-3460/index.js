/**
 * @ 백준 3460
 * https://www.acmicpc.net/problem/3460
 */

let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split('\n').map(Number);

let testCase = input[0];
let binary;
let ans = [];
for (let i = 1; i <= testCase; i++) {
  binary = input[i].toString(2);

  [...binary].reverse().map((v, i) => {
    if (v === "1") {
      ans.push(i)
    }
  })

  console.log(ans.join(" "));
}

