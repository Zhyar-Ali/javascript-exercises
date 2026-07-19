const contains = function(object, value) {
    const array = Object.values(object);

    if (array.includes(value)) {return true;}

    const nests = array.filter((value) => typeof value === 'object' && value !== null);

    return nests.some((nest) => contains(nest, value));
};
  
// Do not edit below this line
module.exports = contains;
