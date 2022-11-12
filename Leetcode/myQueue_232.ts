class MyQueue<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.shift();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }

  empty(): boolean {
    return this.size() == 0;
  }
}

var obj = new MyQueue();
obj.push(10);
var param_2 = obj.pop();
var param_3 = obj.peek();
// var param_4 = obj.empty()
