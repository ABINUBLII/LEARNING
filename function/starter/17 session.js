const firstName = "john";
const secondName = "son";
const job = "hore";
const birthYear = 1993;
const year = 2023;

const allOfIt = "i'm" + " " + firstName + secondName + " " + (birthYear - year);
console.log(allOfIt);

const allOfIt2 = "i'm" + firstName + secondName + (birthYear - year);
console.log(allOfIt2);

const allOfIt3 = `i'm ${firstName + secondName} ${birthYear - year} and my job is a ${job}`;
console.log(allOfIt3);
