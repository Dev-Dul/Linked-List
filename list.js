class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let tail = this.tail();
      tail.next = node;
    }
  }

  prepend(value) {}

  size() {
    let count = 0;
  }

  head() {
    return this.head;
  }

  tail() {
    let tailnode = this.head;
    if (tailnode) {
      while (tailnode.next) {
        tailnode = tailnode.next;
      }
    }
    return tailnode;
  }

  at(index) {}

  pop() {}

  contains(node) {}

  find(node) {}

  toString() {}

  insertAt(node, index) {}

  removeAt(index) {}
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
