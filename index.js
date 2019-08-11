var recipes = { 
  Breakfast: 'Eggs',
  Lunch: 'Sandwhich',
  Dinner: 'Steak' 
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { key: value });
}

