function vocalCounter(array) {
  let vocal = ["o", "A", "e", "I", "a", "U", "i", "E", "u", "O"];

  let search = array.filter((al) => vocal.includes(al));
  let result = search.toString().replaceAll(",", "");
  let jum = result.length;
  if (jum > 0) {
    return `Jumlah vokal yang ditemukan sebanyak ${jum} berupa ${result}`;
  } else {
    return "Tidak ada huruf vokal yang ditemukan";
  }

  return;
}

console.log(vocalCounter(["x", "A", 5, "o", 1, "T", "b"]));
console.log(vocalCounter([-10, "E", "e", "z", "p", "i", 4]));
console.log(vocalCounter(["q", "W", "r", "t", "Y"]));

module.exports = vocalCounter;
