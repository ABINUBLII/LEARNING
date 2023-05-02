//hitung volume kubus dengan rumus a * a, b*b. c * c

function hitungVolumeKubus(a, b, c) {
  let volumeA;
  let volumeB;
  let volumeC;
  let total;

  volumeA = a * a;
  volumeB = b * b;
  volumeC = c * c;

  total = volumeA + volumeB + volumeC;

  return total;
}

console.log(hitungVolumeKubus(1, 2, 3));
