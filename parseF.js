function parseF(s) {
  var newFloat = parseFloat(s);
  if (isNaN(newFloat)) return null;
  else return newFloat;
}