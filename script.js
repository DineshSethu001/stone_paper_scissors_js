let playGame=confirm("shall we play game stone,paper and scissors?")
if(playGame)
{
    let playerChoice=prompt("Enter any one in stone,paper  and scissors")
    if(playerChoice){
    let playerOne=playerChoice.trim().toLowerCase(); 
        if(playerOne === "rock" || playerOne ==="paper" ||playerOne === "scissors")
        {
            let computerChoice=Math.floor(Math.random()*3 + 1)
            let computer=
                computerChoice === 1
                ?"rock" //true
                :computerChoice ===2 
                ?"paper"//true
                :"scissors"//false
            let result = 
            playerOne===computer
            ?"Tie Game !"
            :playerOne ==="rock" && computer=='paper'
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            :playerOne ==="paper" && computer=='scissors'
            ?`playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            :playerOne ==="scissors" && computer=='rock'
            ?`playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            :`playerOne: ${playerOne}\nComputer: ${computer}\nPlayer wins!`;
        alert(result)
        let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for coming...");
            
        }
        else
        {
            alert("you must enter with in this \n 1)stone. \n 2)paper.  \n 3)scissors.")
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for coming...");
        }
    }
    else
    {
        alert("I guess you changed your mind. Maybe next time.");
    }

}
else
{
    alert("We will see next time!")
}