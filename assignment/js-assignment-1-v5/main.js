function travelDiscount(id, amount) {
  let a = "";
  let harga,
    total = 0;

  if (id.startsWith("STD")) {
    a = "STUDENT";
    harga = amount * 20000;
    if (amount > 20) {
      total = harga - harga * 0.2;
    } else {
      total = harga;
    }
  } else if (id.startsWith("CORP")) {
    a = "CORPORATE";
    harga = amount * 50000;
    if (amount > 30) {
      total = harga - harga * 0.25;
    } else {
      total = harga;
    }
  } else {
    a = "Maaf, voucher yang anda miliki tidak valid!";
  }

  return `Selamat! Voucher untuk ${a} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${total}.`;
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount;
