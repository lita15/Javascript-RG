function rekapSalesByName(data, name) {
  // TODO: answer here
}

function salesReport(data, correction) {
  let month = 0;
  let compare = 0;
  let namesTotal = { Adi: 0, Budi: 0, Poltak: 0, Sri: 0, Udin: 0 };

  if (correction) {
    for (let i in correction) {
      if (correction[i].type === "tambah") {
        data.push({
          salesName: correction[i].salesName,
          totalSales: correction[i].totalSales,
          salesDate: correction[i].salesDate,
        });
      } else if (correction[i].type === "koreksi") {
        let koreksi = data.findIndex(
          (e) =>
            e.salesName === correction[i].salesName &&
            e.salesDate === correction[i].salesDate
        );
        data[koreksi].totalSales = correction[i].totalSales;
      }
    }
  }

  for (let i in data) {
    month += data[i].totalSales;
    namesTotal[data[i].salesName] += data[i].totalSales;
  }

  let total = Object.values(namesTotal);
  let totalMax = Math.max(...total);
  for (let i in namesTotal) {
    if (namesTotal[i] > compare) {
      compare = namesTotal[i];
      names = i;
    }
  }

  let result = data.reduce(
    (b) =>
      Object.assign(
        b,
        { monthlySales: month },
        { totalSalesByName: namesTotal },
        {
          bestSalesman: `Penjualan terbanyak dilakukan oleh ${names} dengan total penjualan dalam 1 bulan sebesar ${totalMax}`,
        }
      ),
    {}
  );
  return result;
}

data = [
  {
    salesName: "Udin",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Sri",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Budi",
    totalSales: 100,
    salesDate: 1,
  },
];

correction = [
  {
    type: "koreksi",
    salesName: "Budi",
    totalSales: 400,
    salesDate: 1,
  },
  {
    type: "koreksi",
    salesName: "Sri",
    totalSales: 200,
    salesDate: 1,
  },
];
console.log(salesReport(data, correction));

module.exports = {
  salesReport,
};
