function splitToArr(str) {
  let test = "";

  if (str === "") {
    test = "Data not available";
  } else if (typeof str === "undefined") {
    return "Invalid input";
  } else if (str.includes("a")) {
    tes = str.split(/[-;]/);
    test = tes.map((tes) => {
      return tes[0].toUpperCase() + tes.slice(1);
    });
    return test;
  }
  return test;
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
console.log(
  splitToArr(
    "ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"
  )
);
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;
