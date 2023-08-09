/**
 * @ 백준 2460
 * https://www.acmicpc.net/problem/2460
 */

let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split('\n');

let arr = input.map((v) => v.split(' '))

let arr2 = [];
let current = 0;

arr.map((v) => {
  current = current + Number(v[1]) - Number(v[0])
  arr2.push(current)
})

console.log(Math.max(...arr2));