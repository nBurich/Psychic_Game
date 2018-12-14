var computerChoices= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var wins = 0;
var losses = 0;
var guesses = 10;
var userGuess= [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text")
var guessesText = document.getElementById("guesses-text")
var userGuessText = document.getElementById("userGuess-text")


document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerAns = computerChoices[Math.floor(Math.random()* computerChoices.length)];

    if (userGuess === computerChoices) {
        wins++;
        guesses = 10;
    }   
    else {
        guesses= guesses -1;
        losses ++;
    }
    if (guesses === 0) {
        guesses = 10
    }
    
    winsText.textContent = "Wins:"+ wins;
    lossesText.textContent = "Losses:" + losses;
    guessesText.textContent = "Guesses Left:" + guesses;
    userGuessText.textContent = "Your Guesses so far: "+  userGuess;
}