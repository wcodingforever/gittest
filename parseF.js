function parseF(s) {
  var newFloat = parseFloat(s);
  if (isNaN(newFloat)) return null;
  else return newFloat;
}

console.log(parseF("1"));
console.log(parseF("one"));
console.log(parseF("123.454"));
console.log(parseF(false));     // This was added by me, on the local repository.
console.log(parseF(true));

// Adding test for nulls
console.log(parseF(null));
console.log(parseF(undefined)); /* This passes an undefined to the function. */

console.log(parseF(0));
