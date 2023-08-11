const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

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

