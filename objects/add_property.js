let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
fido.age = 10;
console.log(fido);
// Add property 'favorite food'.
fido['favorite food'] = 'Cheese';
console.log(fido);

// add a greet property to 'jane' object 
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet(name) {
    console.log(`Hej, ${name}!`);
  }
};

jane.greet('Bobby'); // Hej, Bobby!
