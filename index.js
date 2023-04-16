///////////////TASK_1////////////////
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

///////////////TASK_2////////////////
class Calculator {
  constructor(x, y) {
    if (
      arguments.length > 2 ||
      typeof x !== "number" ||
      typeof y !== "number"
    ) {
      throw new Error();
    }

    this.x = x;
    this.y = y;

    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.getSum = this.getSum.bind(this);
    this.getMul = this.getMul.bind(this);
    this.getSub = this.getSub.bind(this);
    this.getDiv = this.getDiv.bind(this);
  }

  setX(num) {
    if (!num || typeof num !== "number") {
      throw new Error();
    }
    this.x = num;
  }

  setY(num) {
    if (!num || typeof num !== "number") {
      throw new Error();
    }
    this.y = num;
  }

  getSum() {
    return this.x + this.y;
  }

  getMul() {
    return this.x * this.y;
  }

  getSub() {
    return Math.abs(this.x - this.y);
  }

  getDiv() {
    if (this.y === 0) {
      throw new Error();
    }
    return this.x / this.y;
  }
}

///////////////TASK_3////////////////
class RickAndMorty {
  constructor() {}

  getCharacter(id) {
    if (!id || typeof id !== "number") {
      throw new Error();
    }

    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data.ok) {
          return null;
        }
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      })
  }

  async getEpisode(id) {
    if (!id || typeof id !== "number") {
      throw new Error();
    }
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const data = await response.json();
      if (!data.ok) {
        return null;
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
