function kelvinToCelsius(kelvin) {
  // your code here
  let formula = kelvin - 273.15;
  let bulat = parseFloat(formula).toFixed(2);
  let int = bulat * 1;
  return int;
}

function kelvinToFahrenheit(kelvin) {
  // your code here

  let formula = ((kelvin - 273.15) * 9) / 5 + 32;
  let bulat = parseFloat(formula).toFixed(2);
  let int = bulat * 1;
  return int;
}

function celsiusToFahrenheit(celsius) {
  // your code here
  let formula = (celsius * 9) / 5 + 32;
  let bulat = parseFloat(formula).toFixed(2);
  let int = bulat * 1;
  return int;
}

function celsiusToKelvin(celsius) {
  // your code here
  let formula = celsius + 273.15;
  let bulat = parseFloat(formula).toFixed(2);
  let int = bulat * 1;
  return int;
}

function fahrenheitToKelvin(fahrenheit) {
  // your code here
  let formula = ((fahrenheit - 32) * 5) / 9 + 273.15;
  let bulat = parseFloat(formula).toFixed(2);
  let int = bulat * 1;
  return int;
}

function fahrenheitToCelsius(fahrenheit) {
  // your code here
  let formula = ((fahrenheit - 32) * 5) / 9;
  let bulat = parseFloat(formula).toFixed(2);
  let int = bulat * 1;
  return int;
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  // your code here
  let string = "";

  if (initialUnit == "C" && finalUnit == "K") {
    string = celsiusToKelvin(temperature);
    hasil = string * 1;
  } else if (initialUnit == "C" && finalUnit == "F") {
    string = celsiusToFahrenheit(temperature);
    hasil = string * 1;
  } else if (initialUnit == "F" && finalUnit == "C") {
    string = fahrenheitToCelsius(temperature);
    hasil = string * 1;
  } else if (initialUnit == "F" && finalUnit == "K") {
    string = fahrenheitToKelvin(temperature);
    hasil = string * 1;
  } else if (initialUnit == "K" && finalUnit == "C") {
    string = kelvinToCelsius(temperature);
    hasil = string * 1;
  } else if (initialUnit == "K" && finalUnit == "F") {
    string = kelvinToFahrenheit(temperature);
    hasil = string * 1;
  }

  return hasil;
}

console.log(convertTemperature(0, "C", "K")); // 273.15
console.log(convertTemperature(0, "C", "F")); // 32

console.log(convertTemperature(0, "F", "C")); // -17.78
console.log(convertTemperature(0, "F", "K")); // 255.37

console.log(convertTemperature(0, "K", "C")); // -273.15
console.log(convertTemperature(0, "K", "F")); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
