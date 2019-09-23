var lyrics = [
    {
        missing: "bubbles",
        hintLyric: "Breakfast at Tiffany's and bottles of XXXXXXX"
    },

    {
        missing: "tattoos",
        hintLyric: "Girls with XXXXXXX who like getting in trouble"

    },

    {
        missing: "diamonds",
        hintLyric: "Lashes and XXXXXXXX, ATM machines"

    },

    {
        missing: "favorite",
        hintLyric: "Buy myself all of my XXXXXXXX things"

    },

    {
        missing: "sad",
        hintLyric: "Been through some bad shit, I should be a XXX bitch"
    },

    {
        missing: "savage",
        hintLyric: "Who woulda thought it'd turn me to a XXXXXX"
    },

    {
        missing: "calls",
        hintLyric: "Rather be tied up with XXXXX and not strings"
    },

    {
        missing: "checks",
        hintLyric: "Write my own XXXXXX like I write what I sing, yeah"
    },

    {
        missing: "stop",
        hintLyric: "My wrist, XXXX watchin'"
    },

    {
        missing: "neck",
        hintLyric: "My XXXX, is flossin'"
    },

    {
        missing: "gloss",
        hintLyric: "Make big deposits, my XXXXX is poppin'"
    },

    {
        missing: "hair",
        hintLyric: "You like my XXXX? Gee, thanks! Just bought it"
    },

    {
        missing: "like",
        hintLyric: "I see it, I XXXX it, I want it, I got it"
    },

]

//variables 

var round = 0; 
var wins = 0;
var pickedLetters = [];
var userRemainingGuesses = 7; 
wordTokens = [];

//functions

function renderHintLyric () {
    var renderHint = lyrics[round].hintLyric;

    if(round <= lyrics.length) {
        document.getElementById('hint-lyric').innerHTML = lyrics[round].hintLyric;
    }
}

function renderMissingWord() {
    var missingWord = lyrics[round].missing;
    
    for(var i = 0; i < missingWord.length; i++) {
        wordTokens.push(" _ ");
        var displayedWordTokens = wordTokens.join("  ");
        document.getElementById('missing-word').innerHTML = displayedWordTokens;
    }
}

function updateScore () {
    document.getElementById('wins').innerHTML = wins; 
    document.getElementById('round').innerHTML = round + 1;
    var displayPickedLetters = pickedLetters.join("  ");
    document.getElementById('picked-letters').innerHTML = displayPickedLetters;
    document.getElementById('guesses-remaining').innerHTML = userRemainingGuesses;   
}

function clearBoard(){
    wordTokens = [];
    pickedLetters = [];
    renderMissingWord();
    renderHintLyric();
    var displayPickedLetters = pickedLetters.join("  ");
    document.getElementById('picked-letters').innerHTML = displayPickedLetters;
    document.getElementById('guesses-remaining').innerHTML = userRemainingGuesses;   
}

function reset(){
    wins = 0;
    round = 0;
    wordTokens = [];
    pickedLetters = [];
    userRemainingGuesses = 7;
    renderHintLyric();
    renderMissingWord();
    updateScore();
}


//***** GAME BEGINS *******//

renderHintLyric();
renderMissingWord();
updateScore();


document.onkeyup = function(event) {
    userGuess = event.key.toLocaleLowerCase();

    var missingWord = lyrics[round].missing;
    console.log(missingWord);

    // game begins checking letters

    //if user is wrong
    if (missingWord.indexOf(userGuess) === -1 && pickedLetters.indexOf(userGuess) === -1) {
        userRemainingGuesses--
        console.log(userRemainingGuesses);
    
        pickedLetters.push(userGuess); 
        var displayPickedLetters = pickedLetters.join("  ");
        console.log(displayPickedLetters);

        updateScore();

        if (userRemainingGuesses === 0) {
            alert('Thank u, next! You lost!');
            reset();
        }
    }

    //if user is right
    else if (missingWord.indexOf(userGuess) !== -1 && pickedLetters.indexOf(userGuess) === -1) {
        
        for (let i = 0; i < missingWord.length; i++) {
            if (missingWord[i] === userGuess) {
            wordTokens[i] = missingWord[i];
            }
        }
       
        var displayedWordTokens = wordTokens.join("  ");
        document.getElementById('missing-word').innerHTML = displayedWordTokens;

        //if user guesses all words right
        if (wordTokens.indexOf(" _ ") === -1) {
            round++
            wins++
            clearBoard();
        }  

        else if (wordTokens.indexOf(" _ ") === -1 && round >= lyrics.length){
            alert("It feels so good to be successful! You Won!");
        }
 
    }

}