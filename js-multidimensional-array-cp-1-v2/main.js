function travelSeat(passengers, seatColumn) {
  if (seatColumn <= 0) {
    return "Invalid number";
  } else if (passengers == 0) {
    return "Oops! tickets not sold!";
  }

  let b = [];
  let urut = passengers.sort();
  let sisa = passengers.length % seatColumn;
  if (sisa !== 0) {
    for (let i = 0; i < seatColumn - sisa; i++) {
      passengers.push("Seat available");
    }
    for (let i = 0; i < passengers.length; i += seatColumn) {
      b.push(urut.slice(i, i + seatColumn));
    }
  } else {
    for (let i = 0; i < passengers.length; i += seatColumn) {
      b.push(urut.slice(i, i + seatColumn));
    }
  }
  return b;
}

console.log(travelSeat(["Kakek", "Nenek"], 9));
console.log(travelSeat(["Paman", "Bibi", "Sepupu"], 2));
console.log(travelSeat(["Adik", "Ayah", "Ibu", "Kakak"], 3));
console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
// console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
// console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
// console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
// console.log(travelSeat([], 4));

module.exports = travelSeat;
