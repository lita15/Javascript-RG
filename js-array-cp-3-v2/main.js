function dataSelection(data, amount, start) {
  if (start < 0) {
    return "Starting number cannot be below 0";
  } else if (amount >= data.length) {
    return "Data not found";
  } else if (amount < 1) {
    return "Minimum amount is 1";
  } else if (
    typeof amount === "string" ||
    typeof start === "string" ||
    start + 1 > data.length
  ) {
    return "Invalid command";
  } else {
    let a = data.slice(start - 1);
    if (amount != a.length) {
      selisih = a.length - amount;
      p = a.slice(0, selisih + 1);
      return p;
    }

    return a;
  }
  return [];
}

console.log(
  dataSelection(
    ["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"],
    2,
    3
  )
);
console.log(
  dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1)
);
console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
console.log(dataSelection(["Fauzan", "Uli", "Vika"], "1", "3"));
console.log(dataSelection([], 1, 3));

module.exports = dataSelection;
