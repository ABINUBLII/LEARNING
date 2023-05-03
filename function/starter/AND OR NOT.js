// INI DIMANA KONDISI CODENYA &&
let age = 19;
if (age > 10 && age >= 20) {
  console.log("BENER");
} else {
  console.log("SALAH");
}

// INI DIMANA KONDISI CODENYA OR

let angka = 10;
if (angka < 5 || angka > 5) {
  console.log("BENER");
} else {
  console.log("SALAH BENGA");
}

// KONDISI DIMANA CODE OPERATORNYA NOT

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. 
Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

    Test data:
            § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
*/

/*
let theWinner;
const dolphines = (96 + 108 + 89) / 3; // WINNER
const koalas = (88 + 91 + 110) / 3; // LOSER
console.log(koalas, dolphines);

if (dolphines > koalas) {
  theWinner = `pemenangnya dari team DOLPHINE sebesar (${dolphines}) dan skor dari team koalas (${koalas})`;
} else {
  theWinner = `DRAAAWWW SCORE dari team DOLPHINE (${dolphines}) dan score dari team KOALAS(${koalas})`;
}
console.log(theWinner);
*/

//BONUS 1
const dolphines = (120 + 108 + 89) / 3; // WINNER 105.66666666666667
const koalas = (90 + 89 + 110) / 3; // LOSER 101
console.log(dolphines, koalas);

if (dolphines > koalas && dolphines >= 100) {
  // kondisinya TRUE SEMUA
  console.log(`team dolphines menang`);
} else if (koalas > dolphines && koalas >= 100) {
  // kondisinya 1
  console.log(`team koalas menang`);
} else if (dolphines === koalas) {
  console.log(`DRAW`);
}
