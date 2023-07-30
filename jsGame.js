
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
    
   // console.log("PLAYER: ", playerSelection);
   // console.log("AI: ", computerSelection);

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


    const buttons = document.querySelectorAll('button');

    let playerScore = 0;
    let computeScore = 0;

    let round = 0;

    buttons.forEach((button) => {

      


        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {

            playerSelection = event.target.id;
           // playerSelection = button id!
            computerSelection = getComputerChoice();
    

            let result = playRound(playerSelection, computerSelection);

            if(result == "W")
                playerScore++;
            if(result == "L")
                computeScore++;
        

            display(result);

          
            

        });

      });
    

 }




 function display(result){

    const results = document.getElementById('resultsContainer');
    let message = "";

    if(result == "W"){
        message = "You beat the AI";
    }
    if(result == "L"){
        message = "You lose";
    }
  
    if(result == "T"){
        message = "TIE";
    }
  
  


    results.textContent = message;
 }




    
    game();



    


    
    
    