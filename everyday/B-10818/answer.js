const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = input[0];
let numberArr = input[1].split(' ').map(Number);

console.log(`${Math.min(...numberArr)} ${Math.max(...numberArr)}`);