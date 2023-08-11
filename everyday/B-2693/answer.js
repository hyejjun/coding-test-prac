const fs = require('fs')
let [testCase, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input.map((v) => {
  return v.split(' ').map(Number).sort((a, b) => b - a)
})

arr.map((v) => {
  console.log(v[2]);
})