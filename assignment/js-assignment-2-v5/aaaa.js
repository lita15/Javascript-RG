function convertItems(items) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    temporary = items[i].split("|");
    result.push(temporary);
  }
  return result;
}

function filterItems(items) {
  let result = [];
  for (i = 0; i < items.length; i++) {
    if (items[i].length < 3) {
      continue;
    }
    if (items[i].length == 3) {
      result.push(items[i]);
    }
  }
  for (i = 0; i < result.length; i++) {
    result[i].splice(1, 1, parseInt(result[i][1]));
  }
  return result;
}
function generateSpareParts(items) {
  const temporary = filterItems(items);
  let result = temporary.map((item) => {
    let object = {};
    object.name = item[0];
    object.price = item[1];
    object.category = item[2];
    return object;
  });
  return result;
}

function itemsStatistics(items) {
  const temporary = filterItems(items);
  let result = {};
  for (let index = 0; index < temporary.length; index++) {
    let temporarycount = result[temporary[index][2]];
    let count = temporarycount ? temporarycount : false;
    result[temporary[index][2]] = count + true;
  }
  return result;
}
function generateItemsData(items) {
  const convert = convertItems(items);
  const tempItems = generateSpareParts(convert);
  const tempStatistic = itemsStatistics(convert);
  const result = items.reduce((res) => {
    let object = {};
    object.spare_parts = tempItems;
    object.statistics = tempStatistic;
    return object;
  });
  return result;
}

// const items = [
//     "Spakbor Gordon|150000|variation",
//     "Head Lamp",
//     "USD KX150|8500000|bodyParts",
//     "Handle Expedition|275000|variation",
//     "Karet Body",
//     "Body set KTM|1899950|bodyParts",
//     "Jok Gordon|250000|variation",
//     "Behel Bodyset Gordon",
//     "CDI BRT KLX|625000|electricity",
//     "Cover jok KLX|185000|variation",
// ]
const items = [
  ["Spakbor Gordon", 150000, "variation"],
  ["USD KX150", 8500000, "bodyParts"],
  ["Handle Expedition", 275000, "variation"],
  ["Body set KTM", 1899950, "bodyParts"],
  ["Jok Gordon", 250000, "variation"],
  ["CDI BRT KLX", 625000, "electricity"],
  ["Cover jok KLX", 185000, "variation"],
];

// console.log(convertItems(items));
console.log(itemsStatistics(items));

module.exports = {
  convertItems,
  filterItems,
  generateSpareParts,
  itemsStatistics,
  generateItemsData,
};
