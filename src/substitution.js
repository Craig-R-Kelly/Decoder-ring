// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  /*
  This module handles encoding vs. decoding by inverting the order of the source and destination alphabets in the arguments sent by the `substitution` function to the parameters of the `translate` function.
  */

  function twentySixUnique(alphabet) {           // Called by `substitution`.
    if (alphabet.length !== 26) return false;    // Returns false if characters too few,
    for (let i = 0; i < 25; i++) {               // too many, or redundant.
      firstChar = alphabet.charAt(0);
      alphabet = alphabet.substring(1);
      if (alphabet.includes(firstChar)) return false;
    }
    return;
}

  function translate(input, from, to) {          // Called by `substitution`.
    let message = "";                            // It does the actual 
    for (let i = 0; i < input.length; i++) {     // work of transliterating the message,
      const inputLetter = input.charAt(i);       // at each loop cycle working from the
      if (inputLetter === " ") {                 // same index position within both the
        message += inputLetter                   // source and destination alphabets.
      }else{
        const position = from.indexOf(inputLetter);
        const outputLetter = to.charAt(position);
        message += outputLetter;
      };
    }
    return message;
  };

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) {return false};
    const lcInput = input.toLowerCase();
    const lcAlphabet = alphabet.toLowerCase();
    if (twentySixUnique(lcAlphabet) === false) return false;
    const deciphered = "abcdefghijklmnopqrstuvwxyz";
    encode ? (message = translate(lcInput, deciphered, lcAlphabet)) :
      (message = translate(lcInput, lcAlphabet, deciphered));
    return message;
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
