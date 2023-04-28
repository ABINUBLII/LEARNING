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

//this is data 1

const calcAverage = (a, b, c) => (a + b + c) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  console.log(avgDolphins, avgKoalas);

  if (avgDolphins >= 2 * avgKoalas) {
    return `dolphins wins the thropy`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `koalas wins the throphy`;
  } else {
    return `none`;
  }
}

checkWinner(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));

//this is data 2

const calcAverage2 = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let skorDolphins2 = calcAverage2(85, 54, 41);
let skorKoalas2 = calcAverage2(500, 60, 60);

function winnerCheck(skorDolphins2, skorKoalas2) {
  if (skorDolphins2 >= 2 * skorKoalas2) {
    return `dolphins win 🔥`;
  } else if (skorKoalas2 >= 2 * skorDolphins2) {
    return `koalas win🔥`;
  } else {
    return `????????`;
  }
}

winnerCheck(skorDolphins2, skorKoalas2);
console.log(winnerCheck(skorDolphins2, skorKoalas2));
