async function calculate(number1, number2) {
  let promise = new Promise(function (resolve, reject) {
    if (number1 === 0 && number2 === 0) {
      reject("number1 and number2 cannot be 0");
    }
    if (number1 % 2 === 0 && number2 % 2 === 0) {
      resolve(number1 - number2);
    } else if (number1 % 2 === 0) {
      resolve(number1 + number2);
    } else if (number1 % 2 !== 0) {
      resolve(number1 * number2);
    }
  });
  return promise;
}

module.exports = calculate;
