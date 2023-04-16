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

function sum(a, b, c) {
  return a - b + c;
}

let curried = curry(sum);

console.log( curried (1, 2, 3) ); // 6
console.log( curried (1)(2,3) ); // 6
console.log( curried (1)(2)(3) ); // 6

