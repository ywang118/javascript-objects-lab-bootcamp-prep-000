var recipes = { foo: 'bar' };
function updateObjectWithKeyAndValue(object,key, value) {
  object[key]=value
  return object;
}

function  updateObjectWithKeyAndValue(object,key, value) {
  return Object.assign({},object, {[key]: value})
}