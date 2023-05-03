//hitung volume kubus dengan rumus a * a, b*b. c * c

// function hitungVolumeKubus(a, b, c) {
//   let volumeA;
//   let volumeB;
//   let volumeC;
//   let total;
//   volumeA = a * a;
//   volumeB = b * b;
//   volumeC = c * c;

//   total = volumeA + volumeB + volumeC;

//   return total;
// }

// const hasil = hitungVolumeKubus(1, 2, 5);
// console.log(hasil);

//>>>>>jamming session<<<<<
// 1. bisa gini ( parameter diisi lansung dengan argumen tanpa dibikin variable)

function tambah(a, b) {
  return a + b;
}

const hasil = tambah(10, 10);
console.log(hasil);

// 2 bisa juga gini ( argumen dibikin variable, lalu variable di declare di function)

function tambah1(d, e) {
  return d + e;
}
const valueA = 5;
const valueB = 5;

const hasil1 = tambah1(valueA, valueB);

console.log(hasil1);

// 2 function (tambah dan bagi)

function substract(a, b) {
  return a + b;
}

const HasilTambah = substract(15, 15);
console.log(`ini hasilnya ${HasilTambah}`);

function kali(a, b) {
  return a * b;
}

const total = kali(substract(1, 2), substract(3, 4));
console.log(total);

//exercise pake soal udemy

const calcAverage = (a, b, c) => (a + b + c) / 3;

const timDolphine = calcAverage(44, 23, 71);
const timKoala = calcAverage(65, 54, 49);

function checkWinner(timDolphine, timKoala) {
  if (timDolphine > timKoala) {
    console.log(`dolphine menang`);
  } else if (timKoala > timDolphine) {
    console.log(`koala menang`);
  }
}

checkWinner(timDolphine, timKoala);
console.log(checkWinner(timDolphine, timKoala));

//Buatlah sebuah function dengan nama "hitungLuasSegitiga" yang menerima dua parameter, yaitu alas dan tinggi, dan mengembalikan nilai luas segitiga.

function hitungLuasSegitiga(alas, tinggi) {
  return 2 * alas * tinggi;
}

console.log(hitungLuasSegitiga(2, 2));

//Buatlah sebuah function dengan nama "greeting" yang menerima satu parameter, yaitu nama seseorang, dan mengembalikan kalimat sapaan "Halo, [nama]!".

function greetings(a) {
  return prompt`halo nama saya`;
}

const nama1 = `abi`;

const NamaLengkap = greetings(nama1);

console.log(NamaLengkap);
