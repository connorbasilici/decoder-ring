// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {

    const polybiusSquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];

    if (encode) {

      // Creates an array of input characters, after making them all lowercase 
      let inputArray = input.toLowerCase().split("");

      // Creates another array where each "i" and "j" value of the inputArray are replaced with "(i/j)"
      let correctedInputArray = [];

      inputArray.forEach((element) => {
        if (element === "i" || element === "j") {
          correctedInputArray.push("(i/j)");
        } else correctedInputArray.push(element);
      })

      // Find the Polybius Square coordinates of each character in the correctedInputArray, and adds +1 to each of them to correct for the offset detailed in the project instructions 
      let xCoordinates = [];
      let yCoordinates = correctedInputArray.map((character) => {
        for (let i = 0; i < polybiusSquare.length; i++) {
          if (polybiusSquare[i].find((letter) => letter === character)) {
            xCoordinates.push(i + 1); // Push the x value to xCoordinates with the +1 offset 
            return polybiusSquare[i].indexOf(character) + 1; // Add the +1 offset to the y value, and return it to the map function which is defining yCoordinates
          }
        }
      });

      // Use an accumulator pattern to push coordinate pairs to a result array 
      result = xCoordinates.reduce((acc, xCoordinate, i) => {
        const coordinates = `${yCoordinates[i]}${xCoordinate}`;
        acc.push(coordinates);
        return acc;
      }, []);

      // Preserve spaces, by switching them back to " " for each element of the results array with value 65 (i.e., the coordinates of the space character in the Polybius Square)
      for (let i = 0; i < result.length; i++) {
        if (result[i] === "65") result[i] = " ";
      }
    
    }

    if (!encode) {

      // Replace any input spaces with their Polybius Square coordinates, 65
      let correctedInput = input.replace(" ", 65);

      // Check if the input value to be decoded has an even number of characters, and return false if not
      if (correctedInput.length % 2 === 0) {
        
        // Push each group of 2 characters from the input string into an element of a coordinates array
        let coordinates = [];

        for (let i = 0; i < correctedInput.length; i+=2) {
          coordinates.push(correctedInput.split("")[i]+correctedInput.split("")[i+1])
        }

        // Map each character in a coordinate pair to its x and y values in the Polybius Square, and place the matching alphabet character in the results array
        result = coordinates.map((element) => {
          return polybiusSquare[element.split("")[1] - 1][element.split("")[0] - 1];
        });
      } else return false
    
    }

    // Join result array, and return it.
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };