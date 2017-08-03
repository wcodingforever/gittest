function parseF(s) {
  var newFloat = parseFloat(s);
  if (isNaN(newFloat)) return null;
  else return newFloat;
}

console.log(parseF("1"));
console.log(parseF("one"));
console.log(parseF("123.454"));