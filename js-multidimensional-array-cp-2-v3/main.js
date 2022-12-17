function discountChecker(costumers, date) {
  let dateChecker = date.split("-");
  let hasil = [];

  for (let i = 0; i < costumers.length; i++) {
    // console.log(costumers[i]);
    let price = costumers[i][0].split(/[$ ]/);
    let priceFix = price.slice(2) * 1;
    let onlyDate = dateChecker[0];

    if (costumers[i].includes("member")) {
      hasil.push(costumers[i]);
    }
    // tanggal ganjil , member, price ganjil
    else if (
      !(
        onlyDate % 2 === 0 &&
        costumers[i].includes("non-member") &&
        priceFix % 2 === 0
      )
    ) {
      a = costumers[i];
      hasil = costumers.filter((e) => e !== a);
    }

    // tanggal positif , member, price positif
  }
  return hasil;
}

let costumers = [
  ["$ 228", "member"],
  ["$ 19", "non-member"],
  ["$ 238", "non-member"],
  ["$ 49", "member"],
];

console.log(discountChecker(costumers, "31-10-2022"));

var costumers2 = [
  ["$ 754", "member"],
  ["$ 233", "member"],
  ["$ 31", "member"],
  ["$ 332", "member"],
];

console.log(discountChecker(costumers2, "10-06-2022"));

module.exports = discountChecker;
