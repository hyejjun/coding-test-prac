const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let sum = 0;
let arr = [];

input.map((v) => {
  if (sum > 100) {
    return;
  }
  sum += v;
  arr.push(v)
})

let result = arr.sort(function (a, b) { return a - b; })

result.map((v) => { console.log(v); })