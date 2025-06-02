const leapYears = function(year) {
   
    //div by 400 -> leap yr
    //div by 100 -> not leap yr
    //div by 4 -> leap year

    let isLeapYear;

    (year % 400 === 0) ? (isLeapYear = true) :
        (year % 100 === 0) ? (isLeapYear = false) :
        (year % 4 === 0) ? (isLeapYear = true) :
        isLeapYear = false;


    return isLeapYear;
};


// Do not edit below this line
module.exports = leapYears;
