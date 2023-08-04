const { log } = require("console")

/** 
 * 1차원 배열
 * 하나의 값으로 초기화 
*/
let arr = Array.from({length: 5}, ()=>7);
// log(arr);


/**
 * 2차원 배열
 * 배열 안에 빈 배열로 초기화
 */

let arr2 = Array.from(Array(4), ()=> new Array(5));
// log(arr2);


/**
 * 2차원 배열
 * 배열 안에 특정 값을 가진 배열로 초기화
 */
let arr3 = new Array(4);

for(let i=0; i<arr3.length; i++){
  arr3[i] = Array.from(
    {length: 5},
    (undefined, j) => i*4+j
  );
}
// log(arr3);

/**
 * concat() 여러개의 배열을 이어 붙여서 합친 결과를 반환한다.
 */

let arr5 = [1,2,3,4,5];
let arr6 = [6,7,8,9,10];
let arr7 = arr5.concat(arr6, [11,12], [13]);
// log(arr7);

/**
 * slice(n, m) 특정 구간의 원소를 꺼낸 배열을 반환한다. 
 */

let arr8 = [1,2,3,4,5,6,7,8,9,10];
let arr9 = arr8.slice(2, 5);
// log(arr9);


/**
 * Array<number>.indexOf(searchElement: number, fromIndex?: number | undefined): number
 * 
 * indexOf(n, m) 특정값(n)을 가지는 원소의 첫째 인덱스를 반환한다. 
 * m 은 생략이 가능하며 m번째 원소부터 찾으라는 의미이다.
 * -1 : 해당하는 원소가 없으면 -1을 반환한다.
 * 
 */

let arr10 = [1,2,3,4,5,5,5,6,7,8,9,10];
let idx = arr10.indexOf(5);
let idx2 = arr10.indexOf(5, 8);
log(idx);
log(idx2);