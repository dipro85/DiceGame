var scores=[0,0];
var roundScore =0;
var activePlayer=0;
var gamePlaying=true;

document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        var dice=Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src='dice-'+dice+'.png';
    
    if(dice!==1){
        roundScore +=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }
    else{
        nextPlayer();
    }
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
    scores[activePlayer]+=roundScore;
        document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer]>=50)
        {
            document.getElementById('name-'+activePlayer).textContent='Winner!';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.dice').style.display='none';
           gamePlaying=false;
        }
    else{
        nextPlayer();
    }
    }
        

});
    


    
function nextPlayer()
{
    if(activePlayer==0){
            activePlayer=1;
        }
        else{
            activePlayer=0;
        }
        roundScore=0;
        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
}
   
    
    
    document.querySelector('.btn-new').addEventListener('click', function(){
        document.getElementById('name-'+activePlayer).textContent='Player '+(activePlayer+1);
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    scores=[0,0];
    roundScore =0;
    activePlayer=activePlayer;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
        gamePlaying=true;
    });