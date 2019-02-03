# constructor-word-guess
constructor word guess game 

A video of how the constructor-word-guess works can be found at https://drive.google.com/file/d/12hSqAh9EqDkx85wrBV-L5eWh8mpBf7oC/view

http://github.com - automatic!
[GitHub](https://drive.google.com/file/d/1Qz86ebv89AKnK8ollmId2pLXgLguR4P7/view)

**Constructor Word Guess** is a game similar to hangman. A player is given a word that they have to guess. They are showed the number
of letters in the word by using underscores.  The player guesses a letter and the program will determine if the letter is in the word.
If the letter guessed is in the word, it will replace the underscore with the letter that was guessed.  The player keeps guessing until the word is guessed or they have used the maximum number of incorrect guesses (14). The player has a maximum of 14 incorrect guesses (if the same incorrect letter is entered multiple times, it is considered as another incorrect gues).


A random word is picked using the **Math.Random** function. The random word is saved to a variable that is a word constructor.

The number of letters in the random word is shown to the player.
![first screen](https://github.com/Ilene0413/constructor-word-guess/blob/master/images/first-screen.png)

The player is prompted to enter a letter or a space.  If the player enters an invalid key, an error message will appear. If a player enters more than one letter, only the first letter be checked in the game.
![invalid entry](https://github.com/Ilene0413/constructor-word-guess/blob/master/images/invalid-entry.png)

If a correct letter is guessed it replaces the underscore in the word
![correct guess](https://github.com/Ilene0413/constructor-word-guess/blob/master/images/correct-letter-guessed.png)

If an incorrect letter is guessed, the player is told incorrect letter and how many guesses are left
![incorrect guess](https://github.com/Ilene0413/constructor-word-guess/blob/master/images/incorrect-guess.png)

Word is guessed
![word guessed](https://github.com/Ilene0413/constructor-word-guess/blob/master/images/guessed-word.png)


The player continues to guess letters until either they have reached the maximum number of incorrect guesses or the guessed the word.
If they guess an incorrect letter, the program will tell them guess incorrect and how many guesses are left.
![multiple guesses](https://github.com/Ilene0413/constructor-word-guess/blob/master/images/multiple-guesses.png)

Player did not guess the word
![player loses](https://github.com/Ilene0413/constructor-word-guess/blob/master/images/lose-game.png)

When the round is over, the player is asked if they want to play again.
![game over](https://github.com/Ilene0413/constructor-word-guess/blob/master/images/end-game.png)

Player presses wants to play again
![play again](https://github.com/Ilene0413/constructor-word-guess/blob/master/images/play-again.png)

Player does not want to play again
![do not play again](https://github.com/Ilene0413/constructor-word-guess/blob/master/images/do-not-play-again.png)




Developed by Ilene Cohen.
email: ilene413@icloud.com
February 2, 2019
