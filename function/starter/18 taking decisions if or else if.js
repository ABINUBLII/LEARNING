/*
const age = 15;
if (age >= 18) {
  console.log("selamat kamu bisa mengendarai mobil !");
} else laterYears = 18 - age;
{
  console.log(`umur kamu untuk mengendarai kurang ${laterYears} tahun`);
}

// /tentukan lahir di century berapa ketika lahir tahun berapa

let century;
const birthYear = 1999;
if (birthYear <= 2000) {
  // if merupakan KONDISI dimana kondisinya true / false
  century = 20;
} else {
  century = 21;
}
console.log(`selamat kamu lahir di abad ke ${century}`);
*/
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

/*
let BMI;

const markMass = 78;
const markWeight = 1.69;
const johnMass = 92;
const johnWeight = 1.95;

const BMIMark = (markMass / markWeight) * 2;
const BMIJohn = (johnMass / johnWeight) * 2;
const markHigherBMI = BMIMark < BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/* Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" OR "John's BMI is higher than Mark's!*/
/*

BISA GINI 
let higherBMI;

const BMIJohn = 94;
const BMIMark = 95;

if (BMIJohn >= BMIMark) {
  higherBMI = `john BMI (${BMIJohn}) lebih tinggi daripada BMI Mark (${BMIMark}) `;
} else if (BMIMark >= BMIJohn) {
  higherBMI = `Mark BMI (${BMIMark}) lebih rendah daripada BMI John (${BMIJohn})`;
}
console.log(higherBMI);
*/

// ATAU BISA GINI
/*
let higherBMI;

const BMIJohn = 90;
const BMIMark = 92;

if (BMIJohn >= BMIMark) {
  higherBMI = `john BMI (${BMIJohn}) lebih tinggi daripada BMI Mark (${BMIMark}) `;
} else {
  higherBMI = `Mark BMI (${BMIMark}) lebih rendah daripada BMI John (${BMIJohn})`;
}
console.log(higherBMI);
*/
// kalo umur sekian udah bisa naik becak dan sebutin berapa lama lagi dia pantes naik becak ?
/*
const sonAge = 10;
if (sonAge >= 15) {
  console.log(`anakmu masih umur ${sonAge} dan belum boleh naik becak`);
} else laterYearsSon = 15 - sonAge;
console.log(`anakmu masih kurang ${laterYearsSon} tahun untuk boleh naik becak`);
*/

/*
let age = 21;
if (age < 20) {
  console.log(`belum cukup umur untuk merokok`);
} else {
  age > 20;
}
console.log(`sudah cukup umur untuk merokok`);
*/
