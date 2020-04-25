/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying, WinningScore;

 document.getElementById('get').addEventListener('click', function(){
    WinningScore = document.getElementById('winningscore').value;
  })

  


// in both function you need to use the following fucntion
//function init
// function next player

// Init function

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice2').style.display = 'block';
    document.getElementById('winningscore').disabled = true;
    
   
        // 1. Random number
           var dice = Math.floor((Math.random() * 6) +1);
           var dice2 = Math.floor((Math.random() * 6) +1);
           

        //2. Display the result
           document.getElementById('current-' + activePlayer).textContent = dice + dice2;
           document.querySelector('.dice').src = 'dice-' + dice + '.png';
           document.querySelector('.dice2').src = 'dice-' + dice2 + '.png';

        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
           

        } else {
            //Next player
            document.getElementById('current-' + activePlayer).textContent = 0;
            document.getElementById('score-' + activePlayer).textContent = 0;
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
             // Update the UI
             Show_active();
        
        }
    }   
);



document.querySelector('.btn-hold').addEventListener('click', function() {

        // Add CURRENT score to GLOBAL score
         
        document.getElementById('score-' + activePlayer).textContent = roundScore;


        // Check if player won the game
        
        console.log(WinningScore);
       if (roundScore >= WinningScore){
           document.getElementById('name-' + activePlayer).textContent = ' Winner!';
           document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
           document.getElementById('score-' + activePlayer).textContent = 0;
           document.querySelector('.btn-roll').disabled = true;
           document.querySelector('.btn-hold').disabled = true;

       }

        //Next player
            document.getElementById('current-' + activePlayer).textContent = 0;
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

        // Update the UI
            Show_active();
        
}
);
document.querySelector('.btn-new').addEventListener('click', init);

function init (){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.getElementById('winningscore').disabled = false;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.btn-roll').disabled = false;
    document.querySelector('.btn-hold').disabled = false;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.remove('active');
    //document.querySelector('.player-0-panel').classList.add('active');
}

function Show_active(){
            //document.querySelector('.player-'+ activePlayer + '-panel').classList.add('active');
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
}
