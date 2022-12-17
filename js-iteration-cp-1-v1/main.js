function reverseUnique(word) {
  // pisah kalimat
  let test = word.split("");
  for (let i = 0; i <= test.length; i++) {
    let j = 1 + i;
    // detect kesamaan huruf
    if (test[i] == test[j]) {
      // hapus kalimat sama
      test.splice(i, 1);
    }
  }
  // balik susunan kalimat
  let balik = test.reverse();
  // gabung kalimat
  let gabung = balik.join("");
  return gabung;
}

console.log(reverseUnique("greating")); //gnitaerg
console.log(reverseUnique("learning")); //gninrael
console.log(reverseUnique("book")); // kob
console.log(reverseUnique("RuangGuru")); //uruGnauR
console.log(reverseUnique("I am reading a book how to hunt a deer")); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
