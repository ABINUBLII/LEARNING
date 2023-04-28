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
