function buyThemAll(books, budget) {
  let sisa = 0; //shoopingreturn
  let title = []; //headingbook
  let titlePrice = [];
  let totalBuy = 0; // totalprice
  let newBook = books.split(/,/);

  for (let i in newBook) {
    splitArr = newBook[i].split(":");
    titlePrice.push(splitArr);
  }

  if (budget !== 0) {
    for (let a in titlePrice) {
      if (budget - totalBuy > parseInt(titlePrice[a][1])) {
        title.push(titlePrice[a][0]);
        totalBuy = totalBuy + parseInt(titlePrice[a][1]);
        sisa = budget - totalBuy;
      } else if (budget - totalBuy < parseInt(titlePrice[a][1])) {
        continue;
      }
    }
    if (title.length !== 0) {
      return `Afista membeli ${title.length} buku yaitu ${title.join(
        ", "
      )}. Total belanja ${totalBuy}, sisa uang Afista adalah ${sisa}.`;
    } else {
      return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
    }
  } else {
    return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
  }
}

console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
    200000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.
console.log(
  buyThemAll(
    "Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,",
    20000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.
console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobit:25000,The Power of Habit:10000,Harry Potter:5000",
    20000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.
console.log(
  buyThemAll(
    "Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,",
    300000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
