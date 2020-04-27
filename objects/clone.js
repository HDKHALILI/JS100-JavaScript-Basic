// shallow copy: it return a new object that has the same
// key/value pairs - object are connected to each other
// if you make change in one it will be reflected in the other.
function clone(obj) {

  let output = {}
  for (let prop in obj) {
    output[prop] = obj[prop]
  }
  return output;

  // or use Object.assign
  // return Object.assign({}, obj)
}


let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
}

let clonedPerson = clone(person);
person.age = 36;
person.name.isStageName = false;
person.title = 'What';

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false
