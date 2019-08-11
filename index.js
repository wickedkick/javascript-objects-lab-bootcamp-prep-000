var recipes = { 
  Breakfast: 'Eggs',
  Lunch: 'Sandwhich',
  Dinner: 'Steak' 
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  object[value];
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  Object.assign( {}, object, {  key: value } )
}