const repeatString = function(string, number) {

    let result = "";

    if(Number(number) === false || number < 0)
    {
        result = "ERROR";
        return result;
        
    }

    for(let i = 0; i < number; i++)
    {
        result += string;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
