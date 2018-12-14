var computerChoices= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var wins = 0;
var losses = 0;
var numGuesses = 10;
var userGuess= [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text")
var numGuessesText = document.getElementById("numGuesses-text")
var userGuessText = document.getElementById("userGuess-text")


document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerAns = computerChoices[Math.floor(Math.random()* computerChoices.length)];

    if ((userGuess === computerChoices) {
        wins++;
        numGuesses = 10;
        guessChoices = [];
    }
        if else (userGuess != computerGuess) {
         numGuesses --;
         guessChoices.push(userGuess);
    }
    else {
        numGuesses = 10;
        losses ++;
        userGuess = [];
    };


document.write() = "Wins:"+ wins;
document.write() = "Losses:" + losses;
document.write() = "Guesses Left:" + guesses ;
document.write() = "Your Guesses so far:"+  event.key  ;

};
