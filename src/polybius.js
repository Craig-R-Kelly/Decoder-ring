// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  /*
  This module has entirely separate processes for encoding and decoding, with the "main" function, below, working as a mere switch with three whole lines of code.
  */

  function polybius(input, encode = true) {
    return encode ? cipher(input) : decipher(input);
  }
    
  function cipher(input) {                       // Having learned to use the modulo
    const messageInLetters = input.toLowerCase();// operator, I put it to work here as
    let sentence = "";                           // well.  By subtracting from the uni-
    for (let i = 0; i < messageInLetters.length; i++) {   // code value of each letter
      letter = messageInLetters[i];              // and dividing that by five, I could
      uniVal = letter.charCodeAt(0);             // determine the 2nd digit of its
      if (uniVal === 32) {sentence += " "};      // code.  The 1st digit was just the
      if (uniVal >= 97 && uniVal <= 105) {       // remainder plus one.
        const digitTwo = (Math.floor((uniVal-92)/5)).toString();
        const digitOne = (((uniVal-92)%5)+1).toString();
        sentence += digitOne + digitTwo;         // this block for 'a'-'i'
      };
      if (uniVal >= 106 && uniVal <= 122) {      // this block for 'j'-'z'
        const digitTwo = (Math.floor((uniVal-93)/5)).toString();
        const digitOne = (((uniVal-93)%5)+1).toString();
        sentence += digitOne + digitTwo;
      };
    }      
    return sentence;
  }

  function rejectOddSpaces(input) {              // Called by `decipher` function.
    const charsLong = input.length;              // This determines whether the input
    const spaces = input.split(" ").length - 1;  // string, minus its spaces, is even.
    return (charsLong - spaces) % 2 === 0;       // If modulo 2 = 0, it's even.
  };

  function decipher(input) {
    if (rejectOddSpaces(input)==false){
      return false;
    } 
    const letter = [[],                          // I constructed this array of arrays
      [,"a","f","l","q","v"],                    // so the syntax used to access its
      [,"b","g","m","r","w"],                    // values mimics the digits if the
      [,"c","h","n","s","x"],                    // encrypted letters.  E.g., code for
      [,"d","(i/j)","o","t","y"],                // 'e' is 51; 'e' is found at
      [,"e","k","p","u","z"]];                   // `letter[5][1]`.  (Because indexing
    let messageInLetters = "";                   // begins at 0 and not 1, dimensions
    for (let i = 0; i < input.length; i++) {     // are 6x6 and not 5x5.)
      if (input.charAt(i) === " ") {
        messageInLetters += " ";
      }else{
        const one = input.charAt(i);
        const uno = Number(one);
        const two = input.charAt(i+1);
        const dos = Number(two);
        if ( uno > 5 || dos > 5 ) {              // if numbers are not decodable
          messageInLetters += one + two;
        }else{
          messageInLetters += letter[uno][dos];
        }
        i=i+1;                                   // Without adjusting `i`, loop cycles
      }                                          // would be correct but the index
    }                                            // values would get off.
    return messageInLetters;
  };  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
