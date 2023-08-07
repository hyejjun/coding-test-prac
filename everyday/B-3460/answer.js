const fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);


let testCase = input[0];
let binary;
for (let i = 1; i <= testCase; i++) {
  binary = input[i].toString(2);
}

let ans = [];

[...binary].reverse().map((v, i) => {
  if (v === "1") {
    ans.push(i)
  }
})

console.log(ans.join(" "));