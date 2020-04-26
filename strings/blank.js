// Write a function that checks whether a string is empty or not.
function isBlank(string) {
  // if string is empty
  // return string.length === 0;
  // only contain white space
  return string.trim().length === 0;
}

console.log(isBlank('mars'));
console.log(isBlank(' '));
console.log(isBlank(''));

