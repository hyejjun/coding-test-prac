/**
 * @ 백준 2693
 * https://www.acmicpc.net/problem/2693
 */

let fs = require('fs')
let [testCase, ...input] = fs.readFileSync('./input.txt').toString().trim().split('\n');

let arr = input.map((v) => {
  return v.split(' ').map(Number).sort((a, b) => b - a)
})

arr.map((v) => {
  console.log(v[2]);
})



/**
 * 
 * 
let fs = require('fs')
const [N, ...input] = fs.readFileSync('./input.txt').toString().trim().split(/\n/).map(v => v.split(" ").map(Number).sort((a, b) => b - a));

input.map((v) => {
  console.log(v[2]);
})
 */