// is a destination present in the destinations array
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome', 'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro', 'Marrakesh', 'New York City'];

function contains(destination, destinations) {
  for (let i = 0; i < destinations.length; i += 1) {
    if (destinations[i] === destination) {
      return true;
    }
  }
}

// using indexOf
// function contains(destination, destinations) {
// return -1 if not found
// if found, returns first at which found
//   return destinations.indexOf(destination) >= 0;
// }

console.log(contains('Barcelona', destinations));

