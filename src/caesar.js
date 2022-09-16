// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',' v','w','x','y','z'];

  function caesar(input, shift, encode = true) {

    // If the shift value isn't present, equal to 0, less than -25 or greater than 25 the function should return false
    if (!shift ||shift < -25 || shift > 25) {
      return false;
    }

    // Flips the shift value if encode is set to false 
    if (encode === false) {
      shift = shift * -1;
    }

    // Make input lower case put the characters of input into an array
    let inputArray = input.toLowerCase().split("");

    // Find the location in alphabet for each character in input, and push it to the inputArrayNonShiftedKeys variable
    const inputArrayNonShiftedKeys = [];

    for (let i = 0; i < inputArray.length; i++) {
      if (alphabet.indexOf(inputArray[i]) < 0) {
        inputArrayNonShiftedKeys.push(inputArray[i]) 
      } else inputArrayNonShiftedKeys.push(alphabet.indexOf(inputArray[i]));
    }

    // add the shift value to each element of inputArrayNonShiftedKeys, and push the result to the inputArrayShiftedKeys variable
    const inputArrayShiftedKeys = [];

    // if a character is not in the alphabet, then push the non-shifted key to the inputArrayShiftedKeys array
    // if the character is in the alphabet, add the shift value

    inputArrayNonShiftedKeys.forEach((element) => {
      typeof(element) === 'number' ? inputArrayShiftedKeys.push(element + shift) : inputArrayShiftedKeys.push(element);
    });

    // Check if any of the elements of the shifted keys are greater than 25, and make them equal to their value mod 26
    // Check if any of the elements of the shifted keys are less than 0, and make them equal to 26 + their value

    const correctedShiftedKeys = [];
    
    inputArrayShiftedKeys.forEach((element) => {
      if (typeof(element) === 'number' && element > 25) {
        correctedShiftedKeys.push(element % 26);
      } else if (typeof(element) === 'number' && element < 0) {
        correctedShiftedKeys.push(26 + element); 
      } else correctedShiftedKeys.push(element);
    });

    // Translate back to alphabet characters

    const result = [];

    correctedShiftedKeys.forEach((element) => {
      typeof(element) === 'number' ? result.push(alphabet[element]) : result.push(element);
    })

    // join the result variable and return the resulting string 

    return result.join("");

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
