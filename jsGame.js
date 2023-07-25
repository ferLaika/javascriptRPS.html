
function getComputerChoice(){

    //generate random number (1-3)
    var choice;
    var num = Math.floor(Math.random() * 3) + 1;
      
    if(num == 1){
        choice = "rock";
    }
    else if(num == 2){
        choice = "paper";
    }
    else if(num == 3){
        choice = "scissors";
    }
    return choice
    }
    
    function playRound(playerSelection, computerSelection){
    
    console.log("PLAYER: ", playerSelection);
    console.log("AI: ", computerSelection);

    //determine the winner based on player's selection, then compare it to alternatives
    if(playerSelection == "rock"){
        if(computerSelection == "scissors")
            return "W";
        else if(computerSelection == "rock")
            return "T"; //you tied
        else 
            return "L"; //you lost :(
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "rock")
            return "W";
        else if(computerSelection == "paper")
            return "T"; //you tied
        else 
            return "L"; //you lost :(
    }
    else{
        if(computerSelection == "paper")
            return "W";
        else if(computerSelection == "scissors")
            return "T"; //you tied
        else 
            return "L"; //you lost :(
    }
    
    
    
     return "W";
    }


 function game(){

    let playerScore = 0;
    let computeScore = 0;

    for(var i = 0; i < 5; i++){

        //prompt the user to enter choice

        let playerSelection = "rock";

        /*if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");
        {
            console.log("Invalid input!, enter valid input!");
            i--; //decrement counter to restart next round
            continue;
        }*/


        let result = playRound(playerSelection, getComputerChoice());
        if(result == "W"){
            playerScore++;
            }
            if(result == "L"){
            computeScore++;
            }


        console.log("current score:");
        console.log("You: ", playerScore);
        console.log("AI: ", computeScore);
        console.log('\n');
   

    }


    //display final results:
    if(playerScore > computeScore){
        console.log("Total score:");
        console.log("You:", playerScore);
        console.log("AI:", computeScore);
            console.log("Winner: You");
    }
    else if(playerScore < computeScore){
        console.log("Total score:");
        console.log("You:", playerScore);
        console.log("AI:", computeScore);
        console.log("Winner: Computer");
    }
        
    else 
        console.log("TIE!");
 }

 ///////////////////////////////////---------------------------------------END OF FUNCTIONS





   game();

    


    
    
    