let string = 'launch school tech & talk';

// using map
// function capitalise(string) {
//   return string.split(' ').map((word) => {
//     let letterArray = word.split('');
//     letterArray[0] = letterArray[0].toUpperCase();
//     return letterArray.join('');
//   }).join(' ');
// }

// using forEach
// function capitalise(string) {
//   let output = [];
//   string.split(' ').forEach((word) => {
//     output.push(word[0].toUpperCase() + word.slice(1));
//   })
//   return output.join(' ');
// }

// using for loop without push method
function capitalise(string) {
  let output = string.split(' ');
  for (let i = 0; i < output.length; i += 1) {
    output[i] = output[i][0].toUpperCase() + output[i].slice(1);
  }

  return output.join(' ');
}

console.log(capitalise(string));