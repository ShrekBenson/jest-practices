function capitalize(string) {
  const capitalLetter = string.charAt(0).toUpperCase();
  return capitalLetter.concat(string.substring(0));
}

function reverseString(string) {  
  return string.split('').reverse().join('');
}

const calculator = {
  add: function(x, y) {
    return x + y;
  },
  substract: function(x, y) {
    return x - y;
  },
  divide: function(x, y) {
    return x / y;
  },
  multiply: function(x, y) {
    return x * y;
  }
}

function alphabet() {
  return Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i))
}

function caesarCipher(string, key) {  
  const stringSplited = string.split('');

  stringSplited.forEach((char, charI) => {
    if (char.toLowerCase() !== char.toUpperCase() && char === char.toLowerCase()) {
      const i = alphabet().indexOf(char);
      stringSplited[charI] = alphabet()[(i + key) % 26];
    } else if (char.toLowerCase() !== char.toUpperCase() && char === char.toUpperCase()) {
      const i = alphabet().indexOf(char.toLowerCase());
      stringSplited[charI] = alphabet()[(i + key) % 26].toUpperCase();
    } else {
      stringSplited[charI] = char;
    }
  });  

  return stringSplited.join('');
}

function analyzeArray(arr = []) {
  const obj = {};
  const length = arr.length;

  obj['average'] = arr.reduce((res, i) => res + i) / length;
  obj['min'] = Math.min(...arr);
  obj['max'] = Math.max(...arr);
  obj['length'] = length;

  return obj;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };