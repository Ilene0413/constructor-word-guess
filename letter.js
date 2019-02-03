// Constructor function for letter objects
var Letter = function (randomLetter, letterGuessed, letterCount) {
  this.underlyingChar = randomLetter;
  this.wasLetterGuessed = false,

    this.guessCharacter = function (letterGuessed) {
      if (letterGuessed === this.underlyingChar) {
        this.wasLetterGuessed = true;
      }
    },

    this.userWord = function () {
      let placeInString;
      if (this.wasLetterGuessed === true) {
        placeInString = this.underlyingChar;
      }
      else {
        placeInString = "_";
      }
      return placeInString;
    };


}
// Exporting our Letter constructor. We will require it in word.js
module.exports = Letter;
