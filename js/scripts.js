// Business LOGIC
function Dice(roll, score, player, turn){
  this.roll = roll;
  this.score = score;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.player = player;
};

Dice.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.player + ", you rolled a 1! Your turn is over!")
  // this.changeturn();
  } else {
  this.tempscore += this.roll;
  }
}

Dice.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.player + ", your turn is over, pass the mouse!");
}

Dice.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.player+ " You are the winner!");
  }
}


var calcScore = function(numbers){
  var tempscore = 0

        if (numbers === 1) {
      return "Sorry You rolled a 1. Score is zero"
    }

    else {

      return  tempscore += numbers;

    }

}


var randomize = function(){
  var randomNumber = Math.floor((Math.random() * 6) + 1);
   return randomNumber;
}
//user LOGIC
$(document).ready(function() {
  $(".btn").click(function() {
    $(".init-show").slideToggle();
    $(".init-hide").slideToggle();
  });
});
// Player 1
 $(".btn-player1").click(function(){
   var player1 = randomize();
   $(".player1Result").text(player1);
   var score1 = calcScore(player1);
   $(".player1Score").text(score1);
 });

 // Player 2

 $(".btn-player2").click(function(){
   var player2 = randomize();
     $(".player2Result").text(player2);
     var score2 = calcScore(player2);
     $(".player2Score").text(score2);

 })
