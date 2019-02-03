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
    numGuessLeft: 14,
    userGuesses: [],
    displayArr: [],
    randomWord: "",
    playNewGame: true
}

//give player directions

console.log(`This game is similar to Hangman. You have to guess a random word. `);
console.log(`The number of letters in the word is initially displayed as underscores`);
console.log(`You have a maximum of 14 incorrect guesses. If you guess an incorrect letter more than once
it will count as another incorrect guess.\n\n`);


// get a random word by calling selectRandom 
//initialize word to be displayed by users guesses

state.randomWord = selectRandomWord();
initDisplayWord(state.randomWord);

//start playing the game

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

        if (err) {
            console.log("prompt error");
            return;
        };

        //check if letter guessed is in word to be guessed, keep count of number of guesses left and number of letters correct
        state.displayArr = state.wordToGuess.guess(result.letter, state.numLettersGuessed, state.numGuessLeft);
        state.numLettersGuessed = state.displayArr[1];
        state.numGuessLeft = state.displayArr[2];
        state.numLettersGuessed = state.displayArr[1];

        //display what user has guessed and not guessed

        displayUserGuesses = state.wordToGuess.toString(state.displayArr[0]);

        //check that user has not guessed the maximum number of incorrect guesses
        if (state.numGuessLeft === 0) {
            console.log("Sorry, You Lose");
            console.log(`Correct word is ${state.randomWord}`);
            askToPlayAgain();
        }
        else {

            //check to see that not all the letters in the word were guessed

            if (state.numLettersGuessed < state.randomWord.length) {
                playWordGuess();
            }
            else {
                console.log(`You Guessed the Word!!!`);
                //ask player if they want to play again
                askToPlayAgain();

            }
        }
    });
}

function selectRandomWord() {
    //randomly choose a word for the user to guess using Math.Random
    let randomNum = Math.floor(Math.random() * state.numWords);
    let randomWord = state.wordArray[randomNum];


    // using the random word generated, create a word to guess
    //which will be replaced with the letters the user guesses
    //and underscores for letters the user has not guessed

    state.wordToGuess.storeWord(randomWord);

    return randomWord;
}
function initDisplayWord(randomWord) {
    //initialize users word array to underscore and display it so user can see how many letters are in the word
    //initialize array 
    let initDisplay = [];
    for (let i=0; i<randomWord.length; i++) {
        initDisplay.push("_");
    };
    let display = initDisplay.toString();
    display = initDisplay.join(" ");
    console.log(`${display}\n`);
}

function askToPlayAgain() {
    let schema = {
        properties: {
            playagain: {
                description: 'Play Again (Y/N)?',
                pattern: /^[yYnN]+$/,
                message: 'Enter a Y or N',
                required: true
            },
        }
    };

    prompt.get(schema, function (err, result) {
        if (result.playagain.toUpperCase() == "Y") {
            for (i = 0; i < state.randomWord.length; i++) {
                state.wordToGuess.letters.pop();
            }
            state.randomWord = selectRandomWord();
            state.numLettersGuessed = 0;
            state.numGuessLeft = 14;
            initDisplayWord(state.randomWord);
            playWordGuess();
        }
        else {
            console.log("Good-Bye");
        }
    });
}