// 5 rules of falsy values : 0, '', undefined, null, NaN.
/*
const money = 0;
if (money) {
  console.log("don't spend all of that money ;)");
} else {
  console.log("you should get a job");
}

let height;
if (height) {
  console.log("the height is defined");
} else {
  console.log("height is UNDEFINED");
}
*/

//EQUALITY OPERATORS
/*
const age = "18";
if (age === 18) console.log("you become an adult(strict)");
if (age == 18) console.log("you become an adult (loose)");
*/

const favorite = Number(prompt("whats ur fav number ? "));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("hell yea 23 is an amazing number!");
} else if (favorite === 10) {
  console.log("10 ada nih");
} else if (favorite === 5) {
  console.log("bole juga lu milih 5");
} else {
  console.log("ngetik yg bener aja!");
}
