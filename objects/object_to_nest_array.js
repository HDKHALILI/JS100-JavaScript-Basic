let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

// convert the person object into a nested array 'nestedPerson',
// containing the same key-value pairs
let nestedPerson = Object.entries(person);
// console.log(nestedPerson);

// or using for/in
let nestedArray = [];
for (prop in person) {
  nestedArray.push([prop, person[prop]]);
}

// console.log(nestedArray);

// Write code that does the reverse, starting from a nested array of pairs
// and building an object.

let newPerson = {}
nestedArray.forEach((entries) => {
  newPerson[entries[0]] = entries[1];
})

console.log(newPerson);