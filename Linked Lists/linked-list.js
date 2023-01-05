class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Add a new node to the end of the linked list
    append(value) {
      const newNode = { value, next: null };
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    // Remove the node at the specified index
    remove(index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) {
        return this.shift();
      }
      if (index === this.length - 1) {
        return this.pop();
      }
      const previousNode = this.get(index - 1);
      const removedNode = previousNode.next;
      previousNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  
    // Get the node at the specified index
    get(index) {
      if (index < 0 || index >= this.length) return undefined;
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  
    // Set the value of the node at the specified index
    set(index, value) {
      const node = this.get(index);
      if (node) {
        node.value = value;
        return true;
      }
      return false;
    }
  
    // Insert a new node at the specified index
    insert(index, value) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) {
        return !!this.unshift(value);
      }
      if (index === this.length) {
        return !!this.append(value);
      }
      const newNode = { value, next: null };
      const previousNode = this.get(index - 1);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.length++;
      return true;
    }
  
    // Reverse the linked list in place
    reverse() {
      let currentNode = this.head;
      this.head = this.tail;
      this.tail = currentNode;
      let previous = null;
      let next;
      for (let i = 0; i < this.length; i++) {
        next = currentNode.next;
        currentNode.next = previous;
        previous = currentNode;
        currentNode = next;
      }
      return this;
    }
  }
  
  // Test the LinkedList class
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  console.log(list.remove(1)); // 2
  