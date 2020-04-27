function removeLastChar(str) {
  // slice(startIndex, endIndex) --> endIndex is not inclusive
  return str.slice(0, -1);
}

console.log(removeLastChar('ciao!'));
console.log(removeLastChar('hello'));