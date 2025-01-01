const palindromes = function (string) {

const array =  string.toLowerCase().split('');

const stringLetters = array.filter((char) => char.toLowerCase() != char.toUpperCase() || Number(char));
const reverseStringLetters = stringLetters.reduce((result, char) => char + result, '');

if(stringLetters.join('') === reverseStringLetters)
{
    return true;
}
else
    return false;

};

// Do not edit below this line
module.exports = palindromes;
