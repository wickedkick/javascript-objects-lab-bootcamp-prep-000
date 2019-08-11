var recipes = { 
  Breakfast: 'Eggs',
  Lunch: 'Sandwhich',
  Dinner: 'Steak' 
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  object = { key: value }
  var newObj = Object.assign({}, object)
  return newObj
}