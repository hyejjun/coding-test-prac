/**
 * 큐 (queue)는 먼저 삽입된 데이터가 먼저 추출되는 자료구조다.
 * 
 * 놀이공원 줄서는거랑 동일함
 * 
 * 삽입 될때는 뒤에 삽입되고
 * 추출(삭제) 될때는 앞에서부터 추출된다.
 * 
 * 머리 : 가장 먼저 들어온 원소
 * 꼬리 : 가장 나중에 들어온 원소
 * 
 * 배열 자료형을 이용할때보다 연결 리스트를 사용할때 수행시간 관점에서 효율적임
 * js에서는 Dictionary 자료형을 이용해 queue를 구현하면 간단하다.
 * 
 */

// 개중요 - 나만의 템플릿으로 만들고 갖고 있기
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  // 값 삽입 : 뒤에 넣고
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  // 값 삭제 : 앞에서 빼고
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];  // 앞에거 빼고
    this.headIndex++; // 앞에거 뺐으니까 headIndex 하나 증가 시킴
    return item;
  }

  peek() {
    return this.items[this.headIndex]; // 가장 앞에 있는 원소 리턴
  }

  size() {
    return this.tailIndex - this.headIndex;
  }

  isEmpty() {
    return this.headIndex === this.tailIndex;
  }

  clear() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
}

queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(8);
queue.enqueue(6);
queue.dequeue();

while (!queue.isEmpty()) {
  console.log(queue.dequeue());
}

