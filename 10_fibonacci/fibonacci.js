const fibonacci = function(index) {

    index = Number(index);
    
    if(index < 0)
        return "OOPS";

    let resultArray = [0, 1, 1];

    while(resultArray.length <= index)
    {
        resultArray.push(resultArray[resultArray.length - 2] + resultArray[resultArray.length - 1]);
    }

    return resultArray[index];

};

// Do not edit below this line
module.exports = fibonacci;
