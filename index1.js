//require prompt

let prompt = require('prompt');

// requiring our Word module exported from word.js
let Word = require("./word.js");

//state is an object that holds global variables
// array of words to guess

let state = {
    wordArray: [
        "oreos",
        "pretzels",
        "chocolate cake",
        "brownies",
        "candy",
        "popcorn",
        "tortilla chips",
        "chocolate chip cookies",
        "ice cream",
        "potato chips",
        "lollipop",
        "devil dogs",
        "yodels",
        "twinkies",
        "animal crackers"
    ],
    numWords: 15,
    wordToGuess: new Word(),
    numLettersGuessed: 0,
    userGuesses: [],
    displayArr:[]
}


//randomly choose a word for the user to guess using Math.Random
let randomNum = Math.floor(Math.random() * state.numWords);
let randomWord = state.wordArray[randomNum];


// using the random word generated, create a word to guess
//which will be replaced with the letters the user guesses
//and underscores for letters the user has not guessed

state.wordToGuess.storeWord(randomWord);

//initialize users word array to underscore and display it so user can see how many letters are in the word
state.displayArr = state.wordToGuess.guess("_", state.numLettersGuessed);
state.wordToGuess.toString(state.displayArr[0]);


// start playing the word guess 
//
playWordGuess();

function playWordGuess() {

    //set up for using prompt and validating input - user must enter a letter
let schema = {
    properties: {
        letter: {
            description: 'Enter a letter or a space',
            pattern: /^[a-zA-Z\s]+$/,
            message: 'Enter a letter or a space',
            required: true
        },
    }
};

//
// Start the prompt
//
prompt.start();

//
    //get a letter from the user
    let displayUserGuesses = "";
    

    prompt.get(schema, function (err, result) {
        //play the game, call the word constructor method displayUserGuesses
        //to determine if the letter guessed is in the word and display the 
        //the letters in the correct place if the letter is in the word
        //play continues until all the letters in the word are guessed
        //user can enter a letter or space only

        state.displayArr = state.wordToGuess.guess(result.letter, state.numLettersGuessed);
        displayUserGuesses = state.wordToGuess.toString(state.displayArr[0]);
        if (state.displayArr[1] < randomWord.length) {
            playWordGuess();
        }
        else {
            console.log(`You Guessed the Word!!!`);
        }
    });
}

