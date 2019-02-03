// Requiring Letter constructor function exported from Letter.js
let Letter = require("./letter.js");

// Constructor function for creating Word objects
let Word = function (randomWord, letterGuessed, letterCount) {

  // this.letters will hold the letters of the word or an 
  // an underscore to represent the missing letters that have
  //not been guessed
  this.letters = [];

  //this method saves the word to guess by calling the letters constructor
  //first need to empty the word

  this.storeWord = function (randomWord) {
    for (let i = 0; i < randomWord.length; i++) {
      let randomChar = randomWord.charAt(i);
      this.letters.push(new Letter(randomChar));

    }
  };

  // This method displays the letters the user has guessed that is in the
  //random word and underscores for the missing letters

  this.toString = function (joinWord) {
    displayGuesses = joinWord.toString();
    displayGuesses = joinWord.join(" ");
    console.log(`${displayGuesses}\n`);
    return displayGuesses;

  };
  //this method takes the letter the user entered and calls the
  //letter method guess to compare it to the letters in the random word
  //if there is a match, the letter counter is incremented 
  //return the user guesses in an array and the number of letters guessed

  this.guess = function (letterGuessed, numLettersGuessed, numIncorrectLeft) {
    let correctLetter = false;

    //create an array to hold the user's guesses
    let userWordGuesses = [];

    //check user guess against every letter in random word
    //if there is a match, change letter guessed is true
    //then push the letter in the correct spot in the array
    //and increment the number of letters matched
    //if there is no match, push an underscore

    //check if letter guessed is in the word

    for (i = 0; i < this.letters.length; i++) {
      // if was letter guessed true, no need to check again

      if (!this.letters[i].wasLetterGuessed) {
        this.letters[i].guessCharacter(letterGuessed, numLettersGuessed);
        if (this.letters[i].wasLetterGuessed) {
          numLettersGuessed++;
          correctLetter = true;
        };
      }
        let charInUserWord = this.letters[i].userWord();
        userWordGuesses.push(charInUserWord);
      
    };

    if (!correctLetter) {
      numIncorrectLeft--;
      console.log(`incorrect guess - number of guesses left is ${numIncorrectLeft}`);
    };

    let returnGuesses = [userWordGuesses, numLettersGuessed, numIncorrectLeft];
    return returnGuesses;
  };
}
// Exporting the Word constructor which we will use in main.js
module.exports = Word;

