function getComputerChoice(){
    let choice = Math.random()

    if(choice >= 0 && choice < 0.3)
        return "rock"
    if(choice >= 0.3 && choice < 0.6)
        return "paper"
    if(choice >= 0.6 && choice <= 1)
        return "scissors"
}

function getHumanChoice(){
    
    let choice = prompt()
    
    while(choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors"){
        choice = prompt()
    }
    
    return choice.toLowerCase()
}

function winner(string){
    console.log(string + " wins!")
    if(string == "Human")
        humanScore++
    else
        computerScore++
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            winner("Computer")
            return
        }

        if(computerChoice == "scissors"){
            winner("Human")
            return
        }
    }

    if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            winner("Computer")
            return
        }

        if(computerChoice == "rock"){
            winner("Human")
            return
        }
    }

    if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            winner("Computer")
            return
        }
        
        if(computerChoice == "paper"){
            winner("Human")
            return
        }
    }
    
    console.log("It's a tie! Try Again!")
    return
}

function displayScores(){
    console.log("Human: " + humanScore + "\nComputer: " + computerScore)
}

let humanScore = 0
let computerScore = 0

function playGame(){
    let rounds = 0

    while(rounds < 5){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection)
        displayScores()
        rounds++
    }

    if(humanScore > computerScore)
        console.log("THE HUMAN WINS!!!!")
    else if (computerScore > humanScore)
        console.log("THE COMPUTER BEATS THE HUMAN!!!")
    else
        console.log("It's a tie!!!!")

}

playGame()
