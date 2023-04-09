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
