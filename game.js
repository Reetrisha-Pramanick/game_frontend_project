let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#mssg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["lady" , "hunter", "tiger"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //lady , hunter , tiger
}
const drawGame = () => {
    mssg.innerText = "Game was Draw.Play again!"
    mssg.style.backgroundColor = "#004F2D";
}
const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin === true) {
      userScore++;
      userScorePara.innerText = userScore;
     mssg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
     mssg.style.backgroundColor = "blue";
    }
    else {
       compScore++;
       compScorePara.innerText = compScore;
        mssg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        mssg.style.backgroundColor = "red";
    }
    }
const playGame = (userChoice) => {
    const compChoice = genCompChoice();  
    //Generate computer choice

    if(userChoice === compChoice) {
        //Draw game
        drawGame();
    } 
    else {
        let userWin = true;
        if(userChoice === "lady") {
            //tiger, hunter
        userWin = compChoice === "tiger" ? false : true;
        }
    
    else if(userChoice === "tiger") {
        //lady , hunter
        userWin = compChoice === "hunter" ? false : true;
    }
        else {
            // lady , tiger 
           userWin = compChoice === "lady" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});