const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = 0;
let train = 0;

for (let i = 0; i < input.length; i++) {
  const [off, on] = input[i].split(" ").map(Number);

  train = train + on - off

  if (max < train) {
    max = train;
  }
}

console.log(max);