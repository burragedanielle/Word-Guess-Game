//*** dev notes before night time ***/
// i got the letter checking functionality to work; and I got the reset functionaity to work. now working on getting the start functionality and pushing text to the DOM 

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

// ************ 

var round = 0;
var wins = 0;
var pickedLetters = []; // an array of guesses user has made already in round
//use this to slowly display the word as the user types it out // if i use object have the game replace this with displayBlanks. 
var userGuessesRemaining = 7;
var userGuess = "";
dashes = [];

wordTokens = [];

wordTokens.join(" ");

// for each letter in word
// push _ into wordTokens;

function reset(){
    rounds = 0;
    wins = 0;
    pickedLetters = [];
    userGuessesRemaining = 0; 

}

function displayHintLyric(){
    var hintLyric = lyrics[round].hintLyric;
    console.log(hintLyric);
    document.getElementById("hint-lyric").innerHTML = hintLyric;
};

function displayMissingLyric(){
    displayedWord = lyrics[round].displayedWord;
    document.getElementById('displayed-word').innerHTML = displayedWord;   
}

/* this code here is from classmate his way of getting the dashes to appear and replace by user guesses  */

// function testingScript() {
//     var currentWord = lyrics[round].missing;
    
//     splitWord = currentWord.split("");
    
//     for (var i = 0; i < splitWord.length; i++) {
//         dashes.push("_");
//     }; 
//     console.log(splitWord);

//     document.getElementById('displayed-word').innerHTML = splitWord;
// }

//user guess type any letter 
function checkLetters() {
            
    //game starts checking letters 
        
        //game identifies missing Lyric to display based on round

        var missingLyric = lyrics[round].missing; 
        console.log(missingLyric);
        
    //if user guesses... 

        //and is wrong 

        if (missingLyric.indexOf(userGuess) === -1 && pickedLetters.indexOf(userGuess) === -1) {
            //game reviews the missing lyric to find the letter the user guessed
            console.log(missingLyric.indexOf(userGuess));
            
            //it tosses user guess into pickedLetters 
            pickedLetters.push(userGuess); 
            console.log(pickedLetters);
            
            //and removes one guess from the 7 user guesses remaining
            userGuessesRemaining-- 
        } 

        if (userGuessesRemaining === 0) {
            reset();
            alert('Thank u, next! You lost!');
        }
        
        //and is right

        else if (missingLyric.indexOf(userGuess) !== -1 && pickedLetters.indexOf(userGuess) === -1) {

            //game reviews the missing lyric to find the letter the user guessed 

            //this code takes the blank spaces for the missing word and includes the letters as the user guesses them. 
            
            var indexes = missingLyric.indexOf(userGuess);
            
            console.log(indexes);

            displayedWord = lyrics[round].displayedWord;

            for (let i = 0; i < missingLyric.length; i++) {
                if (missingLyric[i] === userGuess) {
                    wordTokens[i]= missingLyric[i];
                    // displayedWord = displayedWord.substring(0, i) + userGuess + displayedWord.substring(i + 1);  
                }

                // update display
            }

            if (wordTokens.indexOf("_") === -1) {
                wins++;
                round++;                     
            }
        }
        
        pickedLetters = []; 
        
} 




// 1. Start the game using any key. 

document.onkeyup = function(event){

    userGuess = event.key.toLowerCase();
    console.log(userGuess);
    
    // 2. Display hint lyric

    displayHintLyric();

    // 3. Display blanks for lyric 

    displayMissingLyric();
    
    // 4. User presses letters (see the fridge game) to guess words. 

    // 5. As user guesses, the game checks letters 

    checkLetters();

    // 6. When user guesses entire correct word, game moves to next "round" or the next lyric in the song.

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('round').innerHTML = round;


    //7. User gets 7 chances to guess the letters in each word. After 7 guesses, they lose and receive a message that says 'Thank U, Next. You Lost!' and game resets. 

}
