const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queueEnd = null;
    this.queueStart = null;
  }

  getUnderlyingList() {
    return this.queueEnd;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.queueStart === null) {
      this.queueEnd = newNode;
      this.queueStart = newNode;
    } else {
      this.queueStart.next = newNode;
      this.queueStart = newNode;
    }
  }

  dequeue() {
    if (this.queueEnd === null) {
      return undefined;
    }

    const dequeuedValue = this.queueEnd.value;

    if (this.queueEnd === this.queueStart) {
      this.queueEnd = null;
      this.queueStart = null;
    } else {
      this.queueEnd = this.queueEnd.next;
    }

    return dequeuedValue;
  }
}
module.exports = {
  Queue,
};
