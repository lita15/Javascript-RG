function convertItems(items) {
  let convert = [];
  for (let i in items) {
    split = items[i].split("|");
    convert.push(split);
  }
  return convert;
}

function filterItems(items) {
  let filter = [];
  for (let i in items) {
    if (items[i].length === 3 && items[i].length !== undefined) {
      items[i].splice(1, 1, 1 * items[i][1]);
    }
  }

  for (let i in items) {
    if (items[i].length === 3) {
      filter.push(items[i]);
    } else {
      continue;
    }
  }
  return filter;
}

function generateSpareParts(items) {
  let generate = [];
  generate = items.map(function (item) {
    return {
      name: item[0],
      price: item[1],
      category: item[2],
    };
  });
  return generate;
}

function itemsStatistics(items) {
  let arr = [];
  let statistic = {};

  for (let i = 0; i < items.length; i++) {
    let category = items[i].splice(2);
    arr.push(category);
  }
  arr.map((e) => {
    statistic[e] = (statistic[e] || 0) + 1;
  });
  return statistic;
}

function generateItemsData(items) {
  let generateData = {};
  let convert = convertItems(items);
  let filter = filterItems(convert);
  let generate = generateSpareParts(filter);
  let statistic = itemsStatistics(filter);
  generateData = items.reduce(function () {
    let obj = {};
    obj.spare_parts = generate;
    obj.statistics = statistic;
    return obj;
  });

  return generateData;
}

const items = [
  ["Spakbor Gordon", 150000, "variation"],
  ["USD KX150", 8500000, "bodyParts"],
  ["Handle Expedition", 275000, "variation"],
  ["Body set KTM", 1899950, "bodyParts"],
  ["Jok Gordon", 250000, "variation"],
  ["CDI BRT KLX", 625000, "electricity"],
  ["Cover jok KLX", 185000, "variation"],
];

const items2 = [
  ["KAYABA OS", 177380, "bodyParts"],
  ["KAYABA OC", 205800, "bodyParts"],
  ["Cover full tank", 159000, "variation"],
  ["Aki GS ASTRA MF", 196000, "electricity"],
];
console.log(itemsStatistics(items));

module.exports = {
  convertItems,
  filterItems,
  generateSpareParts,
  itemsStatistics,
  generateItemsData,
};
