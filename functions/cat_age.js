// convert human years to cat years
// - The first human year corresponds to 15 cat years.
// - The second human year corresponds to 9 cat years.
// - Every subsequent human year corresponds to 4 cat years.

function catAge(humanYears) {
  if (humanYears === 0) {
    return 0;
  } else if (humanYears === 1) {
    return 15;
  } else if (humanYears === 2) {
    return 15 + 9;
  } else {
    return (15 + 9) + (humanYears - 2) * 4;
  }
}

console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));
console.log(catAge(5));