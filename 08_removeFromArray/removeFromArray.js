const removeFromArray = function(array, ...numRemove) {

    return array.filter(number => 
        !numRemove.includes(number));

};

// Do not edit below this line
module.exports = removeFromArray;
