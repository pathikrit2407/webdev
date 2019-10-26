
var scores, roundScore , activePlayer , dice ,gamePlaying , lastdice , winningScore ,input;

init();


document.querySelector(".btn-roll").addEventListener("click",function(){

if(gamePlaying){
 dice = Math.floor(Math.random()*6)+1;
 console.log(dice);

 //2.Dislpay the result 
 document.querySelector(".dice").style.display = "block" ;
 document.querySelector(".dice").src = "dice-"+dice+".png";
 //3. add up the score to the roundScore
 if(lastdice===6 && dice ===6){
//Player looses score
document.querySelector("#score-"+activePlayer).textContent = 0;
document.querySelector("#current-"+activePlayer).textContent = 0;
nextPlayer();
    

 } else if(dice>1){
   
  //Add Score 
   roundScore+=dice ; 

   document.querySelector("#current-"+activePlayer).textContent = roundScore;

 }else{
  //Next Player
   nextPlayer();
 }
  lastdice = dice ;
}
 //1.random number

 });



/*
function roll() {
	alert("Clicked the btn-roll class !");
}

document.querySelector(".btn-roll").addEventListener("click",roll);
*/

document.querySelector(".btn-hold").addEventListener("click", function(){
	if(gamePlaying){
      // add roundScore into currentScore
  scores[activePlayer] += roundScore ;

  //Update UI
  document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];
    roundScore = 0 ;
    document.querySelector("#current-"+activePlayer).textContent = roundScore;
    
   
    //winner who reaches 100 points
    input=document.querySelector(".final-score").value;
  //if the input is null , undefined , '0' then it will return false else it will return true
    if(input){
       winningScore = input;
    }else{
      winningScore=100;
    }
   console.log(winningScore);
    if(scores[activePlayer]>=winningScore){
      document.querySelector("#name-"+activePlayer).textContent = "Winner !";
      document.querySelector(".dice").style.display = "none" ;
      document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
      document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
      gamePlaying=false;
    }else{
         //change the activePlayer
         nextPlayer();
    }

  }
  
});

function nextPlayer(){
	//Next Player
    activePlayer===0 ? activePlayer=1 : activePlayer=0; 
    roundScore=0;

    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;


    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');  

    document.querySelector(".dice").style.display="none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init(){
	scores =[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
document.querySelector(".dice").style.display="none";

document.querySelector("#score-0").textContent = 0 ;
document.querySelector("#score-1").textContent = 0 ;
document.querySelector("#current-0").textContent = 0 ;
document.querySelector("#current-1").textContent = 0 ;

document.querySelector("#name-0").textContent="Player 1";
document.querySelector("#name-1").textContent="Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
document.querySelector(".player-1-panel").classList.remove("active");
}