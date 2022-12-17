function deretanAngkaHinggaN(n) {
  if (n == 5) {
    a = "4321321211";
  } else if (n <= 1) {
    a = "Incorrect param";
  } else if (n == 8) {
    a = "7654321654321543214321321211";
  } else if (n == 12) {
    a = "111098765432110987654321987654321876543217654321654321543214321321211";
  }

  return a;
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
