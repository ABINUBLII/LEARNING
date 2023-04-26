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

// //arrow function
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

function caraMasakSayur(bayem, bumbu) {
  const panci = `didalam panci ada ${bayem} iket bayem dicampur ${bumbu}kg bumbu`;
  return panci;
}
const sayurBayemAsin = caraMasakSayur(1, 3);
console.log(sayurBayemAsin);

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

const calcAge1 = function (umur1) {
  return 50 - umur1;
};
const revokecalcAge = calcAge1(5);
console.log(revokecalcAge);

const umur = function (disiniparameter) {
  return 20 - disiniparameter;
};
const revokeUmur = umur(10);
console.log(revokeUmur);
