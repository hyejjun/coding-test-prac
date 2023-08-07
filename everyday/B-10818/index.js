/**
 * @ 백준 10818
 * https://www.acmicpc.net/problem/10818
 */

let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split('\n');

let number = input[0];
let numberArr = input[1].split(' ').map(Number);

console.log(`${Math.min(...numberArr)} ${Math.max(...numberArr)}`);


