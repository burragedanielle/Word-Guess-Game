//PSEUDO CODE IT

// 1. Lyrics to feed into game, including missing lyric, hint lyrics and blank spaces for missing lyric. 

var lyrics = [
    {
        missing: "bubbles",
        hintLyric: "Breakfast at Tiffany's and bottles of _ _ _ _ _ _ _ ",
        displayedWord: "_______"
    },

    {
        missing: "tatoos",
        hintLyric: "Girls with _ _ _ _ _ _ _  who like getting in trouble",
        displayedWord: "______"

    },

    {
        missing: "diamonds",
        hintLyric: "Lashes and _ _ _ _ _ _ _ _, ATM machines",
        displayedWord: "________"

    },

    {
        missing: "favorite",
        hintLyric: "Buy myself all of my _ _ _ _ _ _ _ _ things",
        displayedWord: "________"

    },

    {
        missing: "sad",
        hintLyric: "Been through some bad shit, I should be a _ _ _ bitch",
        displayedWord: "___"

    },

    {
        missing: "savage",
        hintLyric: "Who woulda thought it'd turn me to a _ _ _ _ _ _ ",
        displayedWord: "______"

    },

    {
        missing: "calls",
        hintLyric: "Rather be tied up with _ _ _ _ _ and not strings",
        displayedWord: "_____"

    },

    {
        missing: "checks",
        hintLyric: "Write my own _ _ _ _ _ _ like I write what I sing, yeah",
        displayedWord: "______"

    },


]



// 2. game variables
     
var round = 0;
var wins = 0;
var pickedLetters = []; // an array of guesses user has made already in round
//use this to slowly display the word as the user types it out // if i use object have the game replace this with displayBlanks. 
var userGuessesRemaining = 7;
var userCorrect = [];
var userGuess = "q";

//3. check letters fuction 

// 4. reset function 
    

// ***********

// 1. Start the game using any key. 

document.on("click", function() {}













)


// 2. User presses letters (see the fridge game) to guess words. 

     
// 3. As user guesses, the game checks letters 

checkLetters();

//4. Display user's already guessed letters in div "user-guessed-letters"



// 5. When user guesses entire correct word, game moves to next "round" or the next lyric in the song.


//6. User gets 7 chances to guess the letters in each word. After 7 guesses, they lose and receive a message that says 'Thank U, Next. You Lost!' and game resets. 