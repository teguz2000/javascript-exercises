const sumAll = function(number1, number2) {

    if(
        typeof(number1 + number2) === "string" ||
        (number1 < 0) === true ||
        (number2 < 0) === true ||
        !Number.isInteger(number1 + number2)
    )
    {
        return "ERROR";
    }

    let result = 0;

    for(let i = Math.min(number1, number2); i <= Math.max(number1,number2); i++)
    {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
