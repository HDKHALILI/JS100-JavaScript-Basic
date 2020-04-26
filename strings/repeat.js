// repeate string a given number of times
function repeate(repitition, string) {
  let outputString = ''
  for (let i = 0; i < repitition; i += 1) {
    outputString += string;
  }

  return outputString;
}

console.log(repeate(3, 'ha'));