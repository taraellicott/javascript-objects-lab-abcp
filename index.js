var recipe = {"key":"value"};


function updateObjectWithKeyAndValue(object, key, value) {
  object.key = value;
  return object;
}



function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}



function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  return newObj
  
}



function destructivelyDeleteFromObjectByKey(object, key) {
 delete object.key;
 return object;
}




