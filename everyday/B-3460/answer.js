const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let arr = [];
const [N, K] = [...input];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    arr.push(i)
  }
}
console.log(arr[K - 1] ? arr[K - 1] : 0);