// Write an if statement that logs 'Yes!' if randomNumber is 1,
// and 'No. if randomNumber is 0
let randomNumber = Math.round(Math.random());

// using if/else
if (randomNumber === 1) {
  console.log('Yes!');
} else {
  console.log('No');
}

// using ternary ?/:
randomNumber === 1 ? console.log('Yes!') : console.log('No');

// Or
console.log(randomNumber === 1 ? 'Yes!' : 'No');