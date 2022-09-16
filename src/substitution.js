// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {

      // Check that substitution alphabet exists, and is only 26 characters long
      if (!alphabet || alphabet.length != 26) return false;

      const substitutionAlphabet = alphabet.toLowerCase().split("");
      const actualAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',' v','w','x','y','z'];
      const inputArray = input.toLowerCase().split("");
      let result = [];

      // Filter the array to contain only repeated characters, and check the length of the result. If the result is greater than 0, then there are duplicate characters and the function will return false.
      if (substitutionAlphabet.filter((character, index) => substitutionAlphabet.indexOf(character) != index).length > 0) return false; 

      const actualAlphabetIndexes = [];

      actualAlphabet.forEach((character) => actualAlphabetIndexes.push(actualAlphabet.indexOf(character)));

      // If encode is set to true, then check each character of the input array, push it to the results array if it's a space, and push the character at the same index in the actual alphabet 
      // if it's not a space. If encode is set to false, push input-array spaces to the result array, and push the character at the same index in the substitution alphabet if it's not a space. 
      if (encode) {
        inputArray.forEach((character) => {
          if (actualAlphabet.indexOf(character) < 0) {
          result.push(character);
        } else {result.push(substitutionAlphabet[actualAlphabet.indexOf(character)])}
      });
      } else {
        inputArray.forEach((character) => {
          if (substitutionAlphabet.indexOf(character) <0) {
            result.push(character);
          } else {result.push(actualAlphabet[substitutionAlphabet.indexOf(character)])}
      });
    } return result.join(""); // Join result array, and return it.
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };