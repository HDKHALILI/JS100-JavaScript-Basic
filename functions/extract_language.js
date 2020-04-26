// extracts the language code from 'locale'
// example of locale: 'en_US.UTF-8'
function extractLanguage(locale) {
  // return locale[0] + locale[1];
  // return locale.slice(0, 2);
  return locale.split('_')[0];
}

console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('en_GB.UTF-8'));
console.log(extractLanguage('ko_KR.UTF-16'));

// extract region code
function extractRegion(locale) {
  // return locale.split('_')[1].slice(0, 2);
  return locale.split('.')[0].split('_')[1];
}

console.log(extractRegion('en_US.UTF-8'));
console.log(extractRegion('en_GB.UTF-8'));
console.log(extractRegion('ko_KR.UTF-16'));