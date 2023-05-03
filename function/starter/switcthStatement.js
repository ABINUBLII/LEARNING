const day = `sabtu`;

switch (day) {
  case `senin`:
    console.log(`mandi`);
    break;
  case `selasa`:
    console.log(`sarapan`);
    break;
  case "rabu":
  case `kamis`:
    console.log(`macet`);
    break;
  case `jumat`:
    console.log(`pulang`);
    break;
  case `sabtu`:
  case `minggu`:
    console.log(`weekend brooo`);
  default:
    console.log(`nothing else matter`);
}

if (day === `senin`) {
  console.log(`mandi`);
} else if (day === `selasa`) {
  console.log(`sarapan`);
} else if (day === `rabu` || day === `kamis`) {
  console.log(`macet`);
} else if (day === `jumat`) {
  console.log(`pulang`);
} else if (day === `sabtu` || day === `minggu`) {
  console.log(`weekend brooo`);
} else {
  console.log(`nothing else matter`);
}
