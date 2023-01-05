class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push a new element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element from the stack
    pop() {
      return this.items.pop();
    }
  
    // Return the top element from the stack without removing it
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Return true if the stack is empty, false otherwise
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  // Test the Stack class
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); // 3
  console.log(stack.peek()); // 2
  console.log(stack.size()); // 2
  console.log(stack.isEmpty()); // false
  stack.clear();
  console.log(stack.size()); // 0
  console.log(stack.isEmpty()); // true
  