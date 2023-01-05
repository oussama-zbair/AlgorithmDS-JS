class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add a new element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element from the queue
    dequeue() {
      return this.items.shift();
    }
  
    // Return the front element from the queue without removing it
    peek() {
      return this.items[0];
    }
  
    // Return true if the queue is empty, false otherwise
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the number of elements in the queue
    size() {
      return this.items.length;
    }
  
    // Clear the queue
    clear() {
      this.items = [];
    }
  }
  
  // Test the Queue class
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue()); // 1
  console.log(queue.peek()); // 2
  console.log(queue.size()); // 2
  console.log(queue.isEmpty()); // false
  queue.clear();
  console.log(queue.size()); // 0
  console.log(queue.isEmpty()); // true
  