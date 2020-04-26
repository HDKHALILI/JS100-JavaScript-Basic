// Write code that checks whether the string byteSequence contains 
// the character x.
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// using includes method
console.log(byteSequence.includes('x'));

// using regex 'test' method
console.log(/x/.test(byteSequence));

// using regex 'match' method
console.log(byteSequence.match(/x/g));

// implementing String.prototype.includes()

function includes(string, letter) {
  let stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i] === letter) {
      return true;
    }
  }
}

console.log(includes(byteSequence, 'x'));