// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  /*
  Perhaps interestingly, of the three cipher modules, each handles encoding vs. decoding differently.  This one merely flips the direction of shifting, and doesn't even have a helper function.
  */
 
  function caesar(input, shift, encode = true) {
                                                 // If `shift` value is bad, reject it now.
    if (typeof shift !== "number" || shift < -25 || shift === 0 || shift > 25) {return false};
    const lcInput = input.toLowerCase();         // First, get rid of caps.
    let cipheredMessage = "";                    // will be building upon this
    let transpose;
    !encode ? transpose = shift * -1 : transpose = shift; // Reverse if DEcoding.  
     for (let i = 0; i < lcInput.length; i++) {   // Loop over each character.
      const letter = lcInput.charAt(i);
      const letterVal = letter.charCodeAt(0);    // getting its unicode value
      const transposedVal = letterVal + transpose;
      let newLetter;                             // (note: 'a'=97, 'z'=122)
      if (letterVal < 97 || letterVal > 122) {   // If character is not a letter,
        newLetter = letter                       // keep it...
      }else{                                     // OR, if a letter, change according
                                                 // to how it wraps end of alphabet.
        if (transposedVal < 97) {newLetter = String.fromCharCode(letterVal + transpose + 26)}
        if (transposedVal >= 97 && transposedVal <= 122) {
          newLetter = String.fromCharCode(transposedVal)}
        if (transposedVal > 122) {newLetter = String.fromCharCode(letterVal + transpose - 26)}
      };
      cipheredMessage += newLetter;              // Add letter to the ciphered message.
    };
    return cipheredMessage;
  }
  
  return {
    caesar,
  };

})();

module.exports = { caesar: caesarModule.caesar };