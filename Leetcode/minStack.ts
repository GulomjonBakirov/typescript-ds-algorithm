class LinkedListNode {
  val: number;
  next: LinkedListNode | null;
  prev: LinkedListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

interface List {
  head: LinkedListNode;
  tail: LinkedListNode;
  size: number;
}

class MinStack {
  private stack: List | undefined;

  constructor() {
    this.stack = undefined;
  }

  push(element: number): void {
    const newNode = new LinkedListNode(element);

    if (this.stack) {
      this.stack.head.prev = newNode;
      newNode.next = this.stack.head;

      this.stack.head = newNode;
      this.stack.size += 1;
    } else {
      this.stack = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }
  }

  pop(): void | any {
    if (!this.stack) return null;

    if (this.stack.head.next) {
      this.stack.head.next.prev = null;
      this.stack.head = this.stack.head.next;
      this.stack.size -= 1;
    } else {
      this.stack = undefined;
    }
  }

  top(): number | any {
    if (!this.stack) return null;

    return this.stack.head.val;
  }

  getMin(): number | any {
    if (!this.stack) return null;

    let val: LinkedListNode = this.stack.head;
    let min: number = val.val;

    while (val.next) {
      if (val.next.val < min) {
        min = val.next.val;
      }

      val = val.next;
    }

    return min;
  }
}

//  Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin());
obj.pop();
console.log(obj.top());
console.log(obj.getMin());
//  var param_3 = obj.top()
//  var param_4 = obj.getMin()
