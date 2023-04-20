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
    if (!this.isEmpty()) {
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
    if (
      iterable === null ||
      iterable === undefined ||
      typeof iterable[Symbol.iterator] !== "function"
    ) {
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
class ListNode {
  constructor(elem) {
    this.elem = elem;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(elem) {
    const node = new ListNode(elem);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }

  prepend(elem) {
    const node = new ListNode(elem);

    if (this.length === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  find(elem) {
    if (this.length === 0) {
      return null;
    }
    let current = this.head;
    while (current) {
      if (current.elem === elem) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  toArray() {
    let current = this.head;
    let arr = [];

    if (this.length === 0) {
      return [];
    }

    while (current !== null) {
      arr.push(current.elem);
      current = current.next;
    }
    return arr;
  }

  static fromIterable(iterable) {
    if (
      iterable === null ||
      iterable === undefined ||
      typeof iterable[Symbol.iterator] !== "function"
    ) {
      throw new Error("Not iterable");
    }

    const list = new LinkedList();

    if (iterable instanceof Map || iterable instanceof Set) {
      for (const item of iterable.values()) {
        list.append(item);
      }
    } else {
      for (const item of iterable) {
        list.append(item);
      }
    }
    return list;
  }
}

///////////////////TASK_3///////////////////
class Car {
  #brand = "";
  #model = "";
  #yearOfManufacturing = 1950;
  #maxSpeed = 100;
  #maxFuelVolume = 20;
  #fuelConsumption = 1;
  #damage = 1;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #health = 100;

  set brand(name) {
    if (typeof name !== "string" || name.trim() < 1 || name.trim() > 50) {
      throw new Error("Invalid brand name");
    }
    this.#brand = name;
  }

  set model(name) {
    if (typeof name !== "string" || name.trim() < 1 || name.trim() > 50) {
      throw new Error("Invalid model name");
    }
    this.#model = name;
  }

  set yearOfManufacturing(year) {
    const date = new Date().getFullYear();

    if (
      typeof year !== "number" ||
      isNaN(year) ||
      !isFinite(year) ||
      !Number.isInteger(year) ||
      year < 1950 ||
      year > date
    ) {
      throw new Error("Invalid year of manufacturing");
    }
    this.#yearOfManufacturing = year;
  }

  set maxSpeed(speed) {
    if (
      typeof speed !== "number" ||
      isNaN(speed) ||
      !isFinite(speed) ||
      !Number.isInteger(speed) ||
      speed < 100 ||
      speed > 330
    ) {
      throw new Error("Invalid max speed");
    }
    this.#maxSpeed = speed;
  }

  set maxFuelVolume(vol) {
    if (
      typeof vol !== "number" ||
      isNaN(vol) ||
      !isFinite(vol) ||
      !Number.isInteger(vol) ||
      vol < 20 ||
      vol > 100
    ) {
      throw new Error("Invalid max fuel volume");
    }
    this.#maxFuelVolume = vol;
  }

  set fuelConsumption(vol) {
    if (
      typeof vol !== "number" ||
      isNaN(vol) ||
      !isFinite(vol) ||
      !Number.isInteger(vol) ||
      vol < 0
    ) {
      throw new Error("Invalid fuel consumption");
    }
    this.#fuelConsumption = vol;
  }

  set damage(num) {
    if (
      typeof num !== "number" ||
      isNaN(num) ||
      !isFinite(num) ||
      !Number.isInteger(num) ||
      vol < 1 ||
      vol > 5
    ) {
      throw new Error("Invalid damage");
    }
    this.#maxFuelVolume = num;
  }

  get brand() {
    return this.#brand;
  }

  get model() {
    return this.#model;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  get damage() {
    return this.#damage;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  get health() {
    return this.#health;
  }

  start() {
    if (this.#isStarted) {
      throw new Error("Car has already started");
    } else {
      this.#isStarted = true;
    }
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error(`Car hasn't started yet`);
    } else {
      this.#isStarted = false;
    }
  }

  fillUpGasTank(liters) {
    if (
      typeof liters !== "number" ||
      isNaN(liters) ||
      !isFinite(liters) ||
      !Number.isInteger(liters) ||
      liters <= 0
    ) {
      throw new Error("Invalid fuel amount");
    }

    if (this.#currentFuelVolume + liters > this.#maxFuelVolume) {
      throw new Error("Too much fuel");
    }

    if (this.#isStarted) {
      throw new Error("You have to shut down your car first");
    }

    this.#currentFuelVolume += liters;
  }

  drive(speed, hours) {
    if (
      typeof speed !== "number" ||
      isNaN(speed) ||
      !isFinite(speed) ||
      !Number.isInteger(speed) ||
      speed <= 0
    ) {
      throw new Error("Invalid speed");
    }

    if (
      typeof hours !== "number" ||
      isNaN(hours) ||
      !isFinite(hours) ||
      !Number.isInteger(hours) ||
      hours <= 0
    ) {
      throw new Error("Invalid duration");
    }

    if (speed > this.#maxSpeed) {
      throw new Error(`Car can't go this fast`);
    }

    if (!this.#isStarted) {
      throw new Error("You have to start your car first");
    }

    const distance = speed * hours;
    const fuelNeeded = (this.#fuelConsumption / 100) * distance;
    const healthNeeded = (this.#damage / 100) * distance;

    if (this.#currentFuelVolume < fuelNeeded) {
      throw new Error(`You don't have enough fuel`);
    }

    if (this.#health < healthNeeded) {
      throw new Error(`Your car won't make it`);
    }

    this.#currentFuelVolume -= fuelNeeded;
    this.#health -= healthNeeded;
    this.#mileage += distance;
  }

  repair() {
    if (this.#isStarted) {
      throw new Error("You have to shut down your car first");
    }

    if (this.#currentFuelVolume !== this.#maxFuelVolume) {
      throw new Error("You have to fill up your gas tank firs");
    }

    this.#health = 100;
  }

  getFullAmount() {
    if (this.#currentFuelVolume === this.#maxFuelVolume) {
      return 0;
    } else {
      return this.#maxFuelVolume - this.#currentFuelVolume;
    }
  }
}