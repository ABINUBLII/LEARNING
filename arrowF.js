`use strict`;

//declaration;

// function fruitProcessor(apple, orange) {
//   const juice = `ada buah apel sebanyak ${apple}, plus buah jeruk sebanyak ${orange}`;
//   return juice;
// }

// const blenderKomp = fruitProcessor(5, 10);
// console.log(blenderKomp);

// function peternakan(ayamBoiler, ayamNegro) {
//   const kandang = `disini ada ayam boiler sebanyak ${ayamBoiler} dan ada ayam negro sebanyak ${ayamNegro}`;
//   return kandang;
// }
// const diPeternakan = peternakan(100, 200);
// console.log(diPeternakan);

// //declaration
// function calCulAge(birthYear) {
//   return 10 - birthYear;
// }
// const umur = calCulAge(5);
// console.log(umur);

// //declaration
// function hitungUmur(umur1) {
//   return 19 - umur1;
// }
// const umurMachine = hitungUmur(20);
// console.log(umurMachine);

// //expression
// const calCulate2 = function (birthYears) {
//   return 50 - birthYears;
// };
// const age2 = calCulate2(30);
// console.log(age2);

// //expression
// const testing = function (waduhay) {
//   return 25 + waduhay;
// };
// const testinger = testing(25);
// console.log(testinger);

// //expression 3
// const motor = function (parameter) {
//   return 50 - parameter;
// };
// const runMotor = motor(25);
// console.log(runMotor);

// // function expression
// const showRoom = function (showRoom1, showRoom2) {
//   const isiShowRoom = `ada motor moge sebanyak ${showRoom1} dan ada motor moge sebanyak ${showRoom2}`;
//   return isiShowRoom;
// };
// const theMachine = showRoom(5, 10);
// console.log(`coba kita test ini disini ${theMachine}`);

//arrow function
// const judul = (iniParameter) => 10 + iniParameter;
// const theMachineOfArrawFunction = judul(20);
// console.log(theMachineOfArrawFunction);

// const yearsTillRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} pensiun dalam ${retirement} tahun`;
// };
// console.log(yearsTillRetirement(1991, `abi`));

// const pensiunKapan = (lahir, namamu) => {
//   const umur = 2023 - lahir;
//   const pensiun = 55 - umur;

//   return `${namamu} pensiun dalam ${pensiun} tahun`;
// };
// console.log(pensiunKapan(1997, `abi`));

//pengulangan function, function expression dan arrow function

// function caraMasakSayur(bayem, bumbu) {
//   const panci = `didalam panci ada ${bayem} iket bayem dicampur ${bumbu}kg bumbu`;
//   return panci;
// }
// const sayurBayemAsin = caraMasakSayur(1, 3);
// console.log(sayurBayemAsin);

// function peternakan(babi, kambing) {
//   const kandang = `disini ada 2 ${babi} dan 3 ${kambing}`;
//   return kandang;
// }
// const peternakanAbi = peternakan(10, 22);
// console.log(peternakanAbi);

// function isiKantorPEC(unitPEC) {
//   const siapaAja = `ada ${unitPEC} orang di unit PEC.`;
//   return siapaAja;
// }
// const mauBerapaAngkanya = isiKantorPEC(10);
// console.log(mauBerapaAngkanya);

// function bengkelMobil(mersi, toyotod, kigrung) {
//   const running01 = `ada ${mersi} mersi, ${toyotod} toyota, ${kigrung} kijang`;
//   return running01;
// }
// const bengkelMobilGue = bengkelMobil(20, 30, 60);
// console.log(bengkelMobilGue);
// const bengkelMobilKe2 = bengkelMobil(1, 5, 9);
// console.log(bengkelMobilKe2);

// function tokoSempak(vs, krokodile) {
//   const runningTs = `ada sempak VS sebanyak ${vs} dan sempak krokodile sebanyak ${krokodile}`;
//   return runningTs;
// }
// const revoke = tokoSempak(12, 50);
// console.log(revoke);

// // >>>>>>>>>>>FUNCTION EXPRESSION<<<<<<<<<<<<

// const calcAge1 = function (umur1) {
//   return 50 - umur1;
// };
// const revokecalcAge = calcAge1(5);
// console.log(revokecalcAge);

// // const umur = function (disiniparameter) {
// //   return 20 - disiniparameter;
// // };
// // const revokeUmur = umur(10);
// // console.log(revokeUmur);

// // WELCOME TO FUNCTON TO FUNCTION
// function blenderPisauKecil(wadahJus) {
//   return wadahJus * 2;
// }

// function blender(apel, berries) {
//   const potonganapel = blenderPisauKecil(apel);
//   const potonganberries = blenderPisauKecil(berries);
//   const jus = `${potonganapel} biji dan ${potonganberries} biji `;
//   return jus;
// }
// console.log(blender(2, 3));

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.

// Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before

// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

//  >>>>>>> HOME WORK <<<<<<<<<<
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

// const judul = (iniParameter) => 10 + iniParameter;
// const theMachineOfArrawFunction = judul(20);
// console.log(theMachineOfArrawFunction);

const calcAverage = (a, b, c) => (a + b + c) / 3;
const skorDolphins = calcAverage(44, 23, 71);
const skorKoalas = calcAverage(65, 54);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`dolphin menang (${skorDolphins} vs. ${skorKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`koalas menang dengan skor ${skorDolphins} .vs. ${skorKoalas} `);
  } else {
    console.log(`no teams win`);
  }
};
checkWinner(skorDolphins, skorKoalas);
checkWinner(2, 19);
