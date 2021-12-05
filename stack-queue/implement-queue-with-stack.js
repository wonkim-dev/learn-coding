/**
 * Implement the class Queue using stacks. The queue methods you need to implement are
 * enqueue, dequeue, peek and empty.
 */

// enqueue: append a value to the end of the queue.
// dequeue: remove the value at the start of the queue.
// peek: return the value at the start of the queue.
// empty: return a boolean value of whether the queue is empty or not.

class Queue {
  constructor() {
    this.in = []; // Space complexity: O(n)
    this.out = []; // Space complexity: O(n)
  }

  // Time and space complexity: O(n)
  enqueue(value) {
    this.in.push(value);
  }

  // Time complexity: O(n)
  dequeue() {
    if (this.out.lenght === 0) {
      while (this.in.lenght) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }

  // Time complexity: O(n)
  peek() {
    if (this.out.lenght === 0) {
      while (this.in.lenght) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[-1];
  }

  // Time complexity: O(n)
  empty() {
    return this.in.lenght === 0 && this.out.lenght === 0;
  }
}
