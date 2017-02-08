$(document).ready(function() {

////////////////////////////////////////
////****    GLOBAL VARIABLES    ****////
////////////////////////////////////////

var $timer = $('#timer')
var $kick = $('#shot')
var turn = 0
var player1 = {
  team: 'Home Team',
  score: 0,
  attemptNum: 0,
  attempts: ['1stP1', '2ndP1', '3rdP1', '4thP1', '5thP1']
  // scoreBoard: $('#player1Score')
}
var player2 = {
  team: 'Away Team',
  score: 0,
  attemptNum: 0,
  attempts: ['1stP2', '2ndP2', '3rdP2', '4thP2', '5thP2']
  // scoreBoard: $('#player2Score')
}
var kicked = false
var result = (($kick.height() / $timer.height()) * 100)
var currentPlayer = whoseTurn();

////////////////////////////////////////
////****       FUNCTIONS       *****////
////////////////////////////////////////

//==Prepare to shoot

    newShot()
    console.log('running')


    $('body').on('keydown', function() {
      console.log("key pressed")
      if (kicked === false) {
        ($kick).animate({
          height: '100%'
        }, 500, function() {
          alert(currentPlayer.score + " Time is up, you missed your shot" + result)
          setTimeout(newShot, 1500)
          $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('missed');
          currentPlayer.attemptNum++
            turn++
        })
        kicked = true
      }
    })



  $('body').on('keyup', function() {
    if (kicked === true) {
      ($kick).stop()
      var result = Math.round(($kick.height() / $timer.height()) * 100)
      if (result < 98) {
        setTimeout(newShot, 1500);
        $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('missed');
        currentPlayer.attemptNum++
          turn++
      } else {
        currentPlayer.score += 1
        $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('goal');
        currentPlayer.attemptNum++
          turn++
          console.log(whoseTurn())
        setTimeout(newShot, 1500)
      }
    if (player2.attemptNum === 5) {
      if (player1.score === player2.score) {
        console.log("it's a tie")
      } else if (player1.score > player2.score) {
        console.log('Home Wins!')
      } else {
        console.log('Away Wins!')
      }
      restart()
      }
    }
  })


  // function noMore() {
  //   $('#btn').unbind('click')
  //   $('#btn2').unbind('click')
  // }

  function newShot() {
    currentPlayer = whoseTurn();
    console.log(currentPlayer);
    ($kick).animate({
      height: '0%'
    }, 1000)

    kicked = false
  }

function whoseTurn() {
  return (turn % 2 ? player2 : player1)
}

function winner() {
  if(player2.attemptNum === 5) {
    if(player1.score > player2.score) {
      return player1.team + " Wins the game!"
    } else if (player1.score < player2.score) {
      return player2.team + " Wins the game!"
    } else {
      return "It's a Tie!"
    }
  }
}
function onTie() {

}

function restart() {
  var msg = confirm(winner() + ' , Play Again?');
    if(msg){
  player1.score = 0
  player2.score = 0
  player1.attemptNum = 0
  player2.attemptNum = 0
  $('.attempt').removeClass('missed goal')
  turn = 0
}else{
  if(winner !== "It's a Tie")
  alert('Thank you for playing')
}

}
  //AFTER WE HAVE A WINNER WE NEED TO STOP THE EVENT LISTENER ON
  // KICKING AND OFFER THE OPTION TO RESTART THE GAME


  //NEED TO RESTART THE GAME AFTER A WINNER IS DEFINED
  //  - SET PLAYER.SCORE, PLAYER.ATTEMPS AND TURN TO 0
  // function restart(){
  //   var msg = confirm(winner + 'Wins the game, Play Again?');
  //   if(msg){
  //   player1.score = 0
  //   player2.score = 0
  //   player1.attemptNum = 0
  //   player2.attemptNum = 0
  //   $('.attempt').removeClass('.missed','goal')
  //   turn = 0
  //   newShot()
  //   }else{
  //   alert(winner + 'wins the game!')
  //   }
  // }



  // ON A TIE WE NEED TO START A SECOND GAME MODE TO ONE GOAL FOR EACH
  // PLAYER
  // CLEAR SCOREBOARD ON SCREEN KEEPING RECORD OF GENERAL SCORE
  // ONCE A WINNER IS DEFINED DISPLAY A MESSAGE WITH OVERALL SCORE







})
