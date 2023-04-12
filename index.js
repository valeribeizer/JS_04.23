////////////////TASK_1////////////////
Array.prototype.customFilter = function (checkElement, thisElement) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (checkElement.call(thisElement, this[i], i, this)) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
}

////////////////TASK_2////////////////
function createDebounceFunction(func, delay) {
  let customTimeout;

  return function (...args) {
    clearTimeout(customTimeout);
    customTimeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

