// let mhs = {
//   nama: `abi nubli farandi`,
//   umur: 19,
//   asli: `bandung`,
// };

// basic object pakai function declaration :

function objectPakeFunction(nama, umur, asli) {
  let mhs = {};
  mhs.nama = nama;
  mhs.umur = umur;
  mhs.asli = asli;

  return mhs;
}

const abi = objectPakeFunction(`abi`, 26, `bandung`);
console.log(abi);
