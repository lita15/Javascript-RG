function stockOpname(items) {
  let stockItems = {
    Ram: 10,
    Motherboard: 4,
    Processor: 5,
    SSD: 8,
    PSU: 12,
    Cooling: 5,
  };

  let test = {};

  const parseObject = Object.fromEntries(items);

  if (items.length > 0) {
    let vRam = stockItems.Ram - parseObject.Ram;
    let vMother = stockItems.Motherboard - parseObject.Motherboard;
    let vPro = stockItems.Processor - parseObject.Processor;
    let vSsd = stockItems.SSD - parseObject.SSD;
    let vPsu = stockItems.PSU - parseObject.PSU;
    let vCool = stockItems.Cooling - parseObject.Cooling;
    let string = `{ "Ram": ${vRam}, "Motherboard": ${vMother}, "Processor": ${vPro}, "SSD": ${vSsd}, "PSU": ${vPsu}, "Cooling": ${vCool} }`;
    test = JSON.parse(string);
  } else {
    test = "Data not found";
  }

  return test;
}

let items1 = [
  ["PSU", 6],
  ["SSD", 3],
  ["Motherboard", 3],
  ["Ram", 2],
  ["Cooling", 4],
  ["Processor", 5],
];

let items2 = [
  ["SSD", 5],
  ["Motherboard", 4],
  ["Processor", 1],
  ["PSU", 3],
  ["Cooling", 5],
  ["Ram", 5],
];

console.log(stockOpname(items1));
console.log(stockOpname(items2));
console.log(stockOpname([]));

module.exports = stockOpname;
