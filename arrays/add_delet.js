// we are given the following array of energy sources
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// remove 'fossil' from the array, then add 'geothermal' to the end of 
// the array
energy.shift();
console.log(energy);
energy.push('geothermal');
console.log(energy);