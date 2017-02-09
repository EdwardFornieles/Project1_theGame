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
  window.onload = function() {
    $('#button').click(function() {
      $('#modal').css('display', 'none')
      newShot()
    })
  }
  //==Prepare to shoot

  console.log('running')


  function keyPressed() {
    console.log("key pressed")
    if (kicked === false) {
      ($kick).animate({
        height: '100%'
      }, 500, function() {
        $('body').off('keydown', keyPressed)
        $('body').off('keyup', keyReleased)
        $('#onGameFeed').addClass('pop')
        setTimeout(newShot, 1500)
        $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('missed');
        currentPlayer.attemptNum++
          turn++
      })
      kicked = true
    }
  }

  function keyReleased() {
    if (kicked === true) {
      ($kick).stop()
      $('body').off('keydown', keyPressed)
      $('body').off('keyup', keyReleased)
      var result = Math.round(($kick.height() / $timer.height()) * 100)
      if (result < 98) {
        setTimeout(newShot, 1500);
        $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('missed');
        currentPlayer.attemptNum++
        $('#notGoal').addClass('pop')
          turn++
      } else {
        currentPlayer.score += 1
        $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('goal');
        currentPlayer.attemptNum++
        $('#goal').addClass('pop')
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
        scoreBoard = (player1.team + ' ' + player1.score + ' ' + player2.team + ' ' + player2.score)
        setTimeout(restart, 1000)
      }
    }
  }

  function newShot() {
    currentPlayer = whoseTurn();
    console.log(currentPlayer);
    ($kick).animate({
      height: '0%'
    }, 1000).promise().done(function() {
      kicked = false
      $('#onGameFeed').removeClass('pop')
      $('#notGoal').removeClass('pop')
      $('#goal').removeClass('pop')

      $('body').on('keydown', keyPressed)
      $('body').on('keyup', keyReleased)

    })
  }

  function whoseTurn() {
    return (turn % 2 ? player2 : player1)
  }

  function winner() {
    if (player2.attemptNum === 5) {
      if (player1.score > player2.score) {
        return player1.team + " Wins the game!"
      } else if (player1.score < player2.score) {
        return player2.team + " Wins the game!"
      } else {
        return "It's a Tie!"
      }
    }
  }


  function restart() {
    var msg = confirm(winner() + " wins!, Play Again?");
    if (msg) {
      player1.score = 0
      player2.score = 0
      player1.attemptNum = 0
      player2.attemptNum = 0
      $('.attempt').removeClass('missed goal')
      turn = 0
    } else {
      if (winner !== "It's a Tie")
        alert('Thank you for playing')
    }
  }



  // function onTie() {
  //
  // }


  // function itsAGoal(){
  //   if(player1.score !==0 && player2.score)
  // }
  // function moveGoalie(){
  //     var x = 0;
  //     setInterval(function(){
  //         x-=1;
  //         $('#goalkeeper').css('left', x + 'px 10');
  //     }, 10);
  // })
  // moveGoalie()
  //
})
