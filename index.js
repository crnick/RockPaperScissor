const game = ()=>{

    let pscore=0;
    let cscore=0;

    const startGame = () =>{
        const playbutton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
    
        playbutton.addEventListener('click',()=>{

            introScreen.classList.add('fadeout')
            match.classList.add('fadein')
        })
    }

    //playmatch everything that revolves around the actual game
    const playmatch = () =>{
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=>{
            option.addEventListener("click",function(){
                 //computer options generate random numbers 0,1,2 and connect them with three options

                const computerNumbers = Math.floor(Math.random() * 3);
                const computerChoice =  computerOptions[computerNumbers] //gives us random rock paper scissor
              
                //calling the function
                 compareHands(this.textContent,computerChoice)

                //updating the images
                playerHand.src=`./assets/${this.textContent}.png`;
                computerHand.src=`./assets/${computerChoice}.png`;
              
            })
        })

    }

    //call this everytime choice is made
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pscore;
        computerScore.textContent= cscore;
        
    
    }



    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');

        //check for tie
        if(playerChoice===computerChoice){
            winner.textContent = "It's a tie";
            return
        }

        if(playerChoice==="rock"){
           if(computerChoice === "scissors"){
                winner.textContent = "Winner is player";    
                pscore++;
                updateScore()
                return;
           }else{
                winner.textContent = "Winner is computer";
                cscore++;
                updateScore();
                return
            }
            
        }

        if(playerChoice==="paper"){
            if(computerChoice === "scissors"){
                 winner.textContent = "Winner is computer";    
                 cscore++;
                 updateScore();
                 return;
            }else{
                 winner.textContent = "Winner is player";
                 pscore++
                 updateScore();
                 return
             }
             
         }


         if(playerChoice==="scissor"){
            if(computerChoice === "rock"){
                 winner.textContent = "Winner is computer";  
                 cscore++;
                 updateScore();
                 return;  
            }else{
                 winner.textContent = "Winner is player";
                 pscore++;
                 updateScore();
                 return
             }
             
         }


    }

    //call inner function
    startGame();
    playmatch();
}


game();

