function counterApp(arr) {
  let hasil = {};
  if (arr === undefined) {
    return "Invalid input";
  } else if (arr.length === 0) {
    hasil = "Data not found";
  }

  let count = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      hasil[arr[i]] = ~~hasil[arr[i]] + 1;
    }
    return hasil;
  };
  let result = count(arr);
  return result;
}

console.log(
  counterApp([
    "Hikman",
    "Naufal",
    "Kanda",
    "Arya",
    "Kanda",
    "Hikman",
    "Naufal",
    "Hikman",
    "Kanda",
    "Kanda",
  ])
);
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp;
