const findTheOldest = function(peopleList) {
    const currentYear = new Date().getFullYear();
    return peopleList.reduce((oldest, person) => {
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        return oldestAge < personAge ? person : oldest;
    });
}

// Do not edit below this line
module.exports = findTheOldest;
