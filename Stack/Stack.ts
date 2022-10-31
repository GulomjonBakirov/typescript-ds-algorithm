import LinkedList from "../linked list/LinkedList";

class Stack<T> implements Iterable<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList();
  }

  size(): number {
    return this.list.size();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  clear(): void {
    this.list.clear();
  }

  push(element: T): void {
    this.list.addBack(element);
  }

  pop(): T {
    return this.list.removeBack();
  }

  peek(): T {
    return this.list.peekBack();
  }

  contains(element: T): boolean {
    return this.list.contains(element);
  }

  [Symbol.iterator](): Iterator<T> {
    return this.list[Symbol.iterator]();
  }
}

export default Stack;
