const findTheOldest = function(people) {

    return people.reduce((result, person) => {

        const yearsLivedPerson = (person.yearOfDeath || new Date().getFullYear()) - (person.yearOfBirth || new Date().getFullYear());
        const yearsLivedResult = (result.yearOfDeath || new Date().getFullYear()) - (result.yearOfBirth || new Date().getFullYear());

        if(yearsLivedPerson > yearsLivedResult)
            result = person;

        return result;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
