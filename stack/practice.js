/**
 * 스택 : 먼저 들어온 데이터가 나중에 나가는 자료구조
 * 새로운 원소를 삭제할때는 가장 마지막 원소가 제거된다
 * 
 * 삽입 (Push) : 마지막 위치에 원소를 추가
 * 추출 (Pop) : 마지막 위치에서 원소를 추출 하여 삭제
 * 최상위 원소 (Top) 마지막에 들어온 원소
 * Empty 스택이 비어있는지 확인하는 연산
 * 
 * js 에서는 배열을 이용해서 스택의 기능을 이용할 수 있다.
 */


let stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.pop();
stack.push(7);
stack.push(1);
stack.pop();

// console.log(stack);
// [ 5, 2, 7 ]


// 인자값 없이 slice 매서드를 사용하면 배열을 복사 한 값을 반환한다.
let reserved = stack.slice().reverse();
// console.log(reserved);
// [ 7, 2, 5 ]
// console.log(stack);
// [ 5, 2, 7 ]

