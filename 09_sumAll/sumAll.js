const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }

    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    if (a > b) {
        [a, b] = [b, a];
    }

    let sum = 0;
    let numElements = b - a + 1;

    // a + b / (numElements / 2)
    // formula only works with even # of elements
    // so for odd # of elements. pre-emptively add last element. 
    // update numElements to not include last element
    // and use formula on remaining elements

    if (numElements % 2 === 1) {
        sum += b;
        numElements--;
        b--;
    }

    sum += (a + b) * (numElements / 2);

    return sum;
};
 sumAll(2,4);

// Do not edit below this line
module.exports = sumAll;
