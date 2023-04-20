///////////////////TASK_1///////////////////
class Stack {
  constructor(num = 10) {
    this.num = num;
    this.stack = [];
    this.top = 0;

    if (
      typeof num !== "number" ||
      num <= 0 ||
      isNaN(num) ||
      !isFinite(num) ||
      !Number.isInteger(num)
    ) {
      throw new Error("Invalid limit value");
    }
  }

  push(elem) {
    this.stack[this.top] = elem;
    this.top += 1;

    if (this.top > this.num) {
      throw new Error("Limit exceeded");
    }
  }

  pop() {
    if (!this.stack.isEmpty()) {
      const popedItem = this.stack[this.top - 1];
      delete this.stack[this.top - 1];
      this.top -= 1;
      return popedItem;
    } else {
      throw new Error("Empty stack");
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  toArray() {
    if (this.isEmpty()) {
      return [];
    }
    return [...this.stack];
  }

  static fromIterable(iterable) {
    if (iterable === null || iterable === undefined || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error("Not iterable");
    }

    let newStack = null;
    if (iterable instanceof Map || iterable instanceof Set) {
      newStack = new Stack(iterable.size);

      for (const el of iterable.values()) {
        newStack.push(el);
      }
    } else {
      newStack = new Stack(iterable.length);

      for (const el of iterable) {
        newStack.push(el);
      }
    }
    return newStack;
  }
}

///////////////////TASK_2///////////////////