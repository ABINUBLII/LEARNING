// const age = 20;

// const drink = age >= 18 ? `wine 🍷` : `milk 🥛`; // ini adalah expression, karena menghasilkan VALUE atau NILAI.
// console.log(drink);

// console.log(`i want to drink some good ${age >= 18 ? `wine 🍷` : `milk 🥛`}`);

// let theTips2;
// const theTips = 300;

// if (theTips <= 300) {
//   console.log(`tipsnya sebesar ${theTips <= (300 * 15) / 100}`);
// } else {
// }console.log(`tipsnya sebesar ${theTips <= 300}`)

// const bills = 275;

// const tips = bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;

// console.log(
//   `ini billnya sebesar ${bills} dan tipnya sebesar ${
//     bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2
//   }`
// );

// const totalHarga = 275;

// if (totalHarga <= 300 && totalHarga >= 50) {
//   console.log(totalHarga * 0.15);
// } else {
// }
// console.log(`dih benga amat lu`);

//SOAL 1
const bills = 40;
const tips = bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

console.log(
  `mas total billnya ${bills}, total tipsnya sebesar ${tips} dan uang yang telah kamu keluarkan sebesar ${
    bills + tips
  }`
);

//SOAL 2
const bills02 = 40;
const tips2 = bills02 <= 50 && bills02 <= 300 ? bills02 * 0.15 : bills02 * 0.2;

console.log(
  `mas billnya sebesar ${bills02} ya? terus ini tipsnya ambil aja ${tips2} terus uang yang saya keluarin totalnya jadi ${
    bills02 + tips2
  } dong anjing lu ya`
);
console.log(bills02 * 0.15);
console.log(bills02 * 0.2);

//SOAL 3
const billsRest3 = 430;
const tipsRest3 = billsRest3 >= 50 && billsRest3 <= 300 ? billsRest3 * 0.15 : billsRest3 * 0.2;
console.log(
  `mas billnya sebesar ${billsRest3} ya? terus ini tipsnya ambil aja ${tipsRest3} terus uang yang saya keluarin totalnya jadi ${
    billsRest3 + tipsRest3
  } dong gila lu ya`
);

// jawaban si paling bener :
const billSibener = 275;
const tipSiBener = billSibener <= 300 && billSibener >= 50 ? billSibener * 0.15 : billSibener * 0.2;
console.log(
  `the bill was ${billSibener}, the tips was ${tipSiBener}, and the total value ${
    billSibener + tipSiBener
  }`
);
// billsnya 10. kalo dibawah 10 berarti 5% dan jika diatas 50 maka

// const bills2 = 10;
// const tips = bills2 >= 20 && bills2 <= 50 ? bills2 * 0.05 : bills * 0.1;
// console.log(
//   `billsnya sebesar ${bills2} dan tipsnya sebesar ${
//     bills2 >= 20 && bills2 <= 50 ? bills2 * 0.05 : bills * 0.1
//   }`
// );

// console.log(15 * 0.05);
// console.log(15 * 0.1);
