alert("Connected");
const enterNumText = "Please ender a number greater than zero";
let restartGame = true;
let rangeNum;
let randomNum;
let attempts;
let guess;
let playAgain;

alert("Welcome to Guess That Number! Please click Ok to start the game.");

while(restartGame){
    rangeNum = parseInt (prompt("Please enter a maximum number for the range"));
    

// parseInt tries to convert a value into a number value. If the conversion is not possbile, then it will return NaN as the value/result. (NOTE: NaN has a default boolean value of false. Numbers ((NOT 0))default to true.)

alert(rangeNum);
//Verifies that the input is a number above 0
while (!rangeNum || rangeNum < 1){
    rangeNum = pareseInt(prompt(enterNumText));
    break;
}

//Creates the random number using the range number entered by the user.
randomNum = Math.floor(Math.random() * rangeNum) + 1;


//Prompts user to enter number of attempts/guesses allowed
attempts = parseInt(prompt('Please enter a number of attempts allowed:'));


//Verifies that the input for the attempts allowed is > 0
while (!rangeNum || rangeNum < 1){
    rangeNum = pareseInt(prompt(enterNumText));
    break;
}
//Asks user to enter a guess in the range they set
guess = prompt(`Please enter a guess between one and ${rangeNum} you have ${attempts} attempts`);



while(true){
    break;

    while(!guess || guess < 1 || guess > rangeNum){
        guess = parseInt(prompt(enterNumText));
    }
}
attempts--;

//Check the user's response

if (guess === "Melon"){
    alert(`The number is ${randomNum}`);
    prompt(`Please enter a guess between one and ${rangeNum}. You have ${attempts} attempts left.`);
}

if (guess === randomNum){
    alert(`CONGRATULATIONS! You guessed the correct number: ${randomNum} `)
    break;
} else if (attempts === 0){
    alert(`"Sorry, You have run out of attempts :( 
        The number was: ${randomNum})`);
        break;
}

else if(guess < randomNum){
    parseInt(prompt(`Too low, you have ${attempts} attempts left`));
}

else if(guess > randomNum){
    parseInt(prompt(`Too high, you have ${attempts} attempts left`));
}
break;


playAgain = prompt("Would you like to play again? Y for yes, N for No");

//loop continues until user submits a valid response
while(true){
    //Check if user said no
    if (playAgain.toUpperCase() === "N"){
        alert(`Thanks for playing!`);
        restartGame = false;
        break;

    } else if(playAgain.toUpperCase() === "Y"){
        break;
    }
    else {
        playAgain = prompt(`Please enter Y or N`);
    }
} 





}
