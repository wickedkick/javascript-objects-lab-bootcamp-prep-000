var recipes = { 
  Breakfast: 'Eggs',
  Lunch: 'Sandwhich',
  Dinner: 'Steak' 
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  var object = { key: value }
  var newObj = Object.assign({}, object)
  return newObj
}