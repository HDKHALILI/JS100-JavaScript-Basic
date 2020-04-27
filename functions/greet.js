// function greet(greeting = 'Hello', recipient = 'world') {
//   console.log(`${greeting}, ${recipient}!`);
// }

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}
greet();
// greet('Salutations');
// greet('Good morning', 'Launch School');

