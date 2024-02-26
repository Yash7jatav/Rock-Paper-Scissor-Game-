let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const drawGame = () => {
    msg.innerText = "Draw Game🤝. Play Again"
    msg.style.backgroundColor = "#000080";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win 🤩🏆🥳"
        msg.style.backgroundColor = "#00ff00";
    }else{
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose 😞😩🥺"
        msg.style.backgroundColor = "#ff6961"
    }
};

const genCompChoice = () => {
    const choiceOptions = ["rock", "paper", "scissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return choiceOptions[randomIdx];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true; 
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});