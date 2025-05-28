const repeatString = function(string = '', num = 0) {
    if (num < 0) {
        return 'ERROR';
    }

    let newString = '';

    for (let i = 0; i < num; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
