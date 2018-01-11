var recipes = {re1: 'I am not a recipe'};

function updateObjectWithKeyAndValue(objectName, key, value){
  var newObj = Object.assign({}, objectName, {[key]: value})
  return newObj
}

function