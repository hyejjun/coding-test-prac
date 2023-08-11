let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

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

