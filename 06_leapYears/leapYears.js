const leapYears = function(year) {

    let result;

    (year % 400 === 0) 
        ? result = true 
        : (year % 100 === 0) 
            ? result = false
            : (year % 4 === 0)
                ? result = true
                : result =false;

    return result;
};

// Do not edit below this line
module.exports = leapYears;
