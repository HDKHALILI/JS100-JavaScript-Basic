// Write a function that takes an ISO 639-1 language code and 
// returns a greeting in that language.

function greet(langCode, region) {
  switch (langCode) {
    case 'en':
      return 'Hi';
    case 'fr':
      return 'Salute!'
    case 'pt':
      return 'Ola!'
    case 'de':
      return 'Hallo!'
    case 'sv':
      return 'Hej!'
    case 'af':
      return 'Haai!'
    default:
      return "Don't know that language"
  }
}

// console.log(greet('sv'));

function extractLanguage(locale) {
  return locale.split('_')[0];
}

function extractRegion(locale) {
  return locale.split('.')[0].split('_')[1];
}

function localeGreet(locale) {
  // 1. extract language code
  let langCode = extractLanguage(locale);

  // 2. extract region
  let region = extractRegion(locale);

  // 3. greet
  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello';
    case 'AU': return 'Howdy';
    default: return greet(langCode);
  }

}

console.log(localeGreet('en_US.UTF-8'));
console.log(localeGreet('en_GB.UTF-8'));
console.log(localeGreet('en_AU.UTF-8'));
console.log(localeGreet('fr_FR.UTF-8'));
console.log(localeGreet('fr_CA.UTF-8'));
console.log(localeGreet('fr_MA.UTF-8'));