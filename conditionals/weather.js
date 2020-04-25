let weather = 'cloudy';
if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log("Grab your umbrella");
} else {
  console.log("Let's stay inside");
}

// using switch
switch (weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log("Grab you umbrella");
    break;
  case 'cloudy':
    console.log("Let's go for a walk");
    break;
  default:
    console.log("Let's stay inside");
}