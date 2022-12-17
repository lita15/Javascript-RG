function countryMedals(players, countries) {
  let hasil = [];
  if (countries !== undefined) {
    countries.forEach((countrie, a) => {
      let obj = {};
      players.forEach((player) => {
        if (player.country === countrie) {
          obj.name = countrie;
          obj.athlete = players
            .filter((q) => q.country == countrie)
            .map((q) => q.name);
          obj.totalMedals = players
            .filter((q) => q.country == countrie)
            .reduce((c, q) => c + q.medals, 0);
        }
      });
      hasil[a] = obj;
    });
    return hasil;
  } else if (countries === undefined || playerData === 0) {
    return "Countries not provided";
  }
}

let playerData = [
  {
    name: "Lionel Messi",
    medals: 5,
    country: "Argentina",
  },
  {
    name: "Iker Casillas",
    medals: 7,
    country: "Spain",
  },
  {
    name: "Ahmad Waluyo",
    medals: 5,
    country: "Indonesia",
  },
  {
    name: "Alvin Arkansas",
    medals: 8,
    country: "Indonesia",
  },
  {
    name: "Gabriel Batistuta",
    medals: 1,
    country: "Argentina",
  },
  {
    name: "Xavi Hernandes",
    medals: 9,
    country: "Spain",
  },
  {
    name: "Carles Puyol",
    medals: 5,
    country: "Spain",
  },
  {
    name: "Jatmika Teja",
    medals: 6,
    country: "Indonesia",
  },
  {
    name: "Sergio Aguero",
    medals: 3,
    country: "Argentina",
  },
];

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
// console.log(countryMedals(playerData, ["Argentina", "Spain"]));
// console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals;
