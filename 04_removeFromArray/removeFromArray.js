const removeFromArray = function(array = [], ...toCut) {

    let result = [];

    for(let i = 0; i < array.length; i++)
    {
        for(let j = 0; j < toCut.length; j++)
        {
            if(array[i] === toCut[j])
            {
                array.splice(i,1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
