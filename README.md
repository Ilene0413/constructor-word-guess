# constructor-word-guess
constructor word guess game 

A video of how the constructor-word-guess works can be found at https://drive.google.com/file/d/12hSqAh9EqDkx85wrBV-L5eWh8mpBf7oC/view

http://github.com - automatic!
[GitHub](https://drive.google.com/file/d/12hSqAh9EqDkx85wrBV-L5eWh8mpBf7oC/view)

**Constructor Word Guess** is a game similar to hangman. A player is given a word that they have to guess. They are showed the number
of letters in the word by using underscores.  The player guesses a letter and the program will determine if the letter is in the word.
If the letter guessed is in the word, it will replace the underscore with the letter that was guessed.  The player keeps guessing until the word is guessed or they have used the maximum number of incorrect guesses (14). The player has a maximum of 14 incorrect guesses, similar to creating a hangman with all its parts.


A random word is picked using the **Math.Random** function. The random word is saved to a variable that is a word constructor.

The number of letters in the random word is shown to the player.
![user chose Spotify-this-song but user did not enter song title, so defaulted to The Sign](https://github.com/Ilene0413/liri-node-app/blob/master/images/spotify-no-song-entered.png)


The player is prompted to enter a letter or a space.  If the player enters an invalid key, an error message will appear

The player continues to guess letters until either they have reached the maximum number of incorrect guesses or the guessed the word.
If they guess an incorrect letter, the program will tell them guess incorrect and how many guesses are left.

When the round is over, the player is asked if they want to play again.



Developed by Ilene Cohen.
email: ilene413@icloud.com
February 2, 2019
