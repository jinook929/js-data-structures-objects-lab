// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, val) {
  const newObj = Object.assign({}, obj);
  newObj[key] = val;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  const newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}