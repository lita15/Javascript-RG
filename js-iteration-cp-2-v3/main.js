function trasureHunter(dailyLog) {
  let a = dailyLog.split("");
  let treasure = 0;
  for (let i = 0; i <= a.length; i++) {
    if (a[i] === "$") {
      treasure += 100;
    } else if (a[i] === "x" && treasure == 0) {
      treasure = 0;
    } else if (a[i] === "x" && treasure >= 0) {
      treasure -= 10;
    } else if (a[i] === "#") {
      treasure *= 0.5;
    }
  }

  return treasure;
}
console.log(trasureHunter("#x")); //0
console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 157.5
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.125

module.exports = trasureHunter;
