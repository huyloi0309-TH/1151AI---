// Stack logic only. No DOM code here.
export class Stack {
  #items = [];
  #capacity;
  constructor(capacity = Infinity) { this.#capacity = capacity; }
  get size() { return this.#items.length; }
  isEmpty() { return this.#items.length === 0; }
  isFull() { return this.#items.length >= this.#capacity; }
  // Returns false (and changes nothing) when the stack is full.
  push(value) {
    if (this.isFull()) return false;
    this.#items.push(value);
    return true;
  }
  // Returns undefined when the stack is empty.
  pop() { return this.#items.pop(); }
  peek() { return this.#items.at(-1); }
  toArray() { return [...this.#items]; }
}
