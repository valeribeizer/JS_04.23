//////////////TASK_1///////////////////
function makeDeepCopy(obj) {
  if (obj === null || typeof obj !== "object" || typeof obj === undefined) {
    throw new Error();
  }

  const clonedObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      clonedObj[key] = makeDeepCopy(obj[key]);
    } else {
      clonedObj[key] = obj[key];
    }
  }
  return clonedObj;
}

//////////////TASK_2///////////////////
function selectFromInterval(numArr, num1, num2) {
  let arrValidation;
  const numValidation = (num) => typeof num === "number" && isFinite(num);

  if (Array.isArray(numArr) && numArr.length !== 0) {
    arrValidation = numArr.every((el) => typeof el === "number" && isFinite(el));
  } else {
    throw new Error();
  }

  if (!arrValidation || !numValidation(num1) || !numValidation(num2)) {
    throw new Error();
  }

  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);
  const newArr = numArr.filter((el) => el >= start && el <= end);

  return newArr;
}
