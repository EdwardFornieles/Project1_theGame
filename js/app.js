$(document).ready(function() {

  ////////////////////////////////////////
  ////****    GLOBAL VARIABLES    ****////
  ////////////////////////////////////////

  var $timer = $('#timer')
  var $kick = $('#shot')
  var turn = 0
  var player1 = {
    team: 'home',
    score: 0,
    attemptNum: 0,
    attempts: ['1stP1', '2ndP1', '3rdP1', '4thP1', '5thP1']
    // scoreBoard: $('#player1Score')
  }
  var player2 = {
    team: 'away',
    score: 0,
    attemptNum: 0,
    attempts: ['1stP2', '2ndP2', '3rdP2', '4thP2', '5thP2']
    // scoreBoard: $('#player2Score')
  }
  var kicked = false
  var result = (($kick.height() / $timer.height()) * 100)

  ////////////////////////////////////////
  ////****       FUNCTIONS       *****////
  ////////////////////////////////////////

  newShot()
  var currentPlayer = whoseTurn();
  //==Prepare to shoot
  if (kicked === false) {
    var kicked = true
    $('#btn').on('click', function() {
      ($kick).animate({
        height: '100%'
      }, 1000, function() {
        alert(currentPlayer.score + " Time is up, you missed your shot" + result)
        setTimeout(newShot, 60)
        $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('missed');
        currentPlayer.attemptNum++
          turn++
      })
    })
  }

  $('#btn2').click(function() {
    ($kick).stop()
    var result = Math.round(($kick.height() / $timer.height()) * 100)
    if (result < 95) {
      alert(currentPlayer.score + " you missed it!  " + result)
      setTimeout(newShot, 60);
      $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('missed');
      currentPlayer.attemptNum++
        turn++
    } else {
      currentPlayer.score += 1
      $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('goal');
      currentPlayer.attemptNum++
        turn++
        console.log(whoseTurn())
      alert(currentPlayer.score + " It's a goal!  ")
      setTimeout(newShot, 600)
    }
    if (player2.attemptNum === 5) {
      if (player1.score === player2.score) {
        stop()
        console.log("it's a tie")
      } else if (player1.score > player2.score) {
        stop()
        console.log("Player 1 win")
      } else {
        stop()
        console.log('player 2 wins')
      }
    }

  })

  function newShot() {
    currentPlayer = whoseTurn();
    console.log(currentPlayer);
    ($kick).animate({
      height: '0%'
    }, 60)
    kicked = false
  }

  //AFTER WE HAVE A WINNER WE NEED TO STOP THE EVENT LISTENER ON
  // KICKING AND OFFER THE OPTION TO RESTART THE GAME
  function stop(){
    $('#btn').unbind('click')
    $('#btn2').unbind('click')
  }

  //NEED TO RESTART THE GAME AFTER A WINNER IS DEFINED
  //  - SET PLAYER.SCORE, PLAYER.ATTEMPS AND TURN TO 0
  function restart(){
    player1.score = 0
    player2.score = 0
    player1.attemptNum = 0
    player2.attemptNum = 0
    $('.attempt').removeClass('.missed','goal')
    turn = 0

  }


  // ON A TIE WE NEED TO START A SECOND GAME MODE TO ONE GOAL FOR EACH
  // PLAYER
  // CLEAR SCOREBOARD ON SCREEN KEEPING RECORD OF GENERAL SCORE
  // ONCE A WINNER IS DEFINED DISPLAY A MESSAGE WITH OVERALL SCORE
  function onTie(){

  }
  function whoseTurn() {
    return (turn % 2 ? player2 : player1)
  }









})
