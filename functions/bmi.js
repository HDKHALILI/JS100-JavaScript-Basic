function calculateBMI(heightInCM, weightInKG) {
  // need height in meeter
  let heightInMeter = heightInCM / 100;

  // calculate bmi, formula: weightInKilogram / heightInMeter**2
  let bmi = weightInKG / heightInMeter ** 2;

  // return 2 decimal places
  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80));