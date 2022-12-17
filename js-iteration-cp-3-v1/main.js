function printNumber(totalNumber) {
  let ucup = "";
  for (let i = 1; i <= totalNumber; i++) {
    if (i % 3 != 0) {
      ucup += i % 3;
    } else {
      ucup += 3;
    }
  }
  return ucup;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber;
