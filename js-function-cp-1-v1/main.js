// TODO: answer here

function checkDatatype(type) {
  if (typeof type === "string") {
    return "string";
  } else if (typeof type === "number") {
    return "number";
  } else if (typeof type === "function") {
    return "function";
  } else if (typeof type === "boolean") {
    return "boolean";
  } else if (type === null) {
    return "null";
  } else if (Array.isArray(type)) {
    return "array";
  } else if (typeof type === "object") {
    return "object";
  }
}
console.log(checkDatatype([]));
console.log(checkDatatype("hayy"));
console.log(checkDatatype(34));
console.log(checkDatatype(function () {}));
console.log(checkDatatype(true));
console.log(checkDatatype({}));
console.log(checkDatatype(null));

exports.checkDatatype = checkDatatype;
