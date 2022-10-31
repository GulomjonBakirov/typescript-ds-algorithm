import LinkedListNode from "./LinkedListNode";
import * as utils from "../utils";

interface List<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  size: number;
}

class LinkedList<T> implements Iterable<T> {
  private list: List<T> | undefined;
  private equalsF: utils.EqualsFunction<T> = utils.defaultEquals;

  constructor() {
    this.list = undefined;
  }

  // NICETIES

  /**
   * Returns size  - O(1)
   * @return {number}
   */

  size(): number {
    if (this.list) return this.list.size;

    return 0;
  }

  // IS EMPTY

  /**
   * Returns boolean  - O(1)
   * @return {boolean}
   */

  isEmpty(): boolean {
    return !this.list;
  }

  /****************************
          INSERTION
  ****************************/
  addFront(val: T): void {
    const newNode = new LinkedListNode(val);

    if (this.list) {
      this.list.head.prev = newNode;
      newNode.next = this.list.head;

      this.list.head = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }
  }

  /**
   * Adds node to the tail of the linked list  - O(1)
   * @param {T} - value to add list
   * @return {void}
   */

  addBack(val: T): void {
    const newNode = new LinkedListNode(val);

    if (this.list) {
      this.list.tail.next = newNode;
      newNode.prev = this.list.tail;

      this.list.tail = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }
  }

  /**
   * Adds a node to specified index - O(n)
   * @param {number} i  - index
   * @param {T} - value to add list
   * @return {void}
   */

  addAt(val: T, i: number): void {
    if (i == 0) {
      this.addFront(val);
      return;
    }

    if (i == this.size()) {
      this.addBack(val);
      return;
    }

    if (i < 0 || i > this.size() || !this.list) {
      throw new Error("Error");
    }

    let cur = this.list.head;

    for (let j = 0; j < i - 1; i++) {
      cur = cur.next!;
    }

    const newNode = new LinkedListNode(val);

    cur.next!.prev = newNode;
    newNode.next = cur.next;

    newNode.prev = cur;
    cur.next = newNode;
    this.list.size += 1;
  }

  /*****************************************************************************
                                  ACCESSING
  *****************************************************************************/
  /**
   * Gets the value of head - O(1)
   * @returns {T} value of head
   */
  peekFront(): T {
    if (!this.list) throw new Error("EMPTY ERROR");

    return this.list.head.val;
  }

  /**
   * Gets the value of tail - O(1)
   * @returns {T} value of tail
   */
  peekBack(): T {
    if (!this.list) throw new Error("EMPTY ERROR");

    return this.list.tail.val;
  }

  /*****************************************************************************
                                  SEARCHING - O(n)
  *****************************************************************************/
  /**
   * Gets the element at index i - O(n)
   * @param {i} - index
   * @return {T} - value of index at i
   */
  get(i: number): T {
    if (i < 0 || i > this.size() || !this.list) {
      throw new Error("OUT");
    }

    let j = 0;
    let cur = this.list.head;
    while (j < i) {
      cur = cur.next!;
      j++;
    }

    return cur.val;
  }

  printAll(): T[] {
    if (!this.list) throw new Error("List Is Empty");

    let curr = this.list.head;
    let str: T[] = [];

    while (curr) {
      str.push(curr.val);

      curr = curr.next!;
    }

    return str;
  }

  reverseList(val: T): T | null {
    if (!this.list) return null;

    let cur = this.list.head;

    while (cur.next) {
      let a = cur.next;
      cur.next = null;
      a.next = cur;
    }

    return cur.val;
  }

  indexOf(value: T): number {
    if (!this.list) return -1;

    let i = 0;
    let cur = this.list.head;

    while (this.equalsF(cur.val, value)) {
      if (!cur.next) return -1;

      cur = cur.next!;
      i += 1;
    }

    return i;
  }

  contains(value: T): boolean {
    const index = this.indexOf(value);

    return index !== -1;
  }
  /*****************************************************************************
                                  DELETION 
  *****************************************************************************/
  removeFront(): T {
    if (!this.list) throw new Error("NOT FOUND");

    const val = this.list.head.val;

    if (this.list.head.next) {
      this.list.head.next.prev = null;
      this.list.head = this.list.head.next;

      this.list.size -= 1;
    } else {
      this.list = undefined;
    }

    return val;
  }

  removeBack(): T {
    if (!this.list) throw new Error("NOT FOUND");

    const val = this.list.tail.val;

    if (this.list.tail.prev) {
      this.list.tail.prev.next = null;
      this.list.tail = this.list.tail.prev;

      this.list.size -= 1;
    } else {
      this.list = undefined;
    }

    return val;
  }

  remove(val: T): T {
    let index = this.indexOf(val);

    if (index === -1) throw new Error("NOT FOUND");

    return this.removeAt(index);
  }

  removeAt(i: number): T {
    if (i == 0) {
      return this.removeFront();
    }

    if (i == this.size() - 1) {
      return this.removeBack();
    }

    if (i < 0 || i > this.size() || !this.list) {
      throw new Error("NOT FOUND");
    }

    let j = 0;
    let cur = this.list.head;

    while (j < i) {
      cur = cur.next!;
      j += 1;
    }

    cur.prev!.next = cur.next!;
    cur.next!.prev = cur.prev!;

    this.list.size -= 1;
    return cur.val;
  }

  clear(): void {
    this.list = undefined;
  }

  /**
    FROM ARRAY ELEMENTS ADD TO LL
  */

  fromArray(A: T[]): LinkedList<T> {
    for (const a of A) {
      this.addBack(a);
    }

    return this;
  }

  *[Symbol.iterator](): Iterator<T> {
    if (!this.list) return;

    let cur: LinkedListNode<T> | null;

    for (cur = this.list.head; cur != null; cur = cur.next) {
      yield cur.val;
    }
  }
}

export default LinkedList;
