const friend1 = `abi`;
const friend2 = `rahman`;
const friend3 = `hilmi`;

const friends = [`abi`, `rahman`, `hilmi`];
console.log(friends);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

//ganti salah satu nama dari 3 orang tersebut
friends[2] = `nugi`;
console.log(friends);

const firstName = `abi`;
const abi = [firstName, `nubli`, 2023 - 1997, `employee`, friends];

console.log(abi);

//exercize

const calcAge = function (birthYear) {
  return 2050 - birthYear;
};

const years = [50, 100, 1000, 1500, 2000];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);
