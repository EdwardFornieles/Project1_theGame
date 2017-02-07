$(document).ready(function() {


   ////////////////////////////////////////
  ////****    GLOBAL VARIABLES    ****////
 ////////////////////////////////////////


  var $timer = $('#timer')
  var $kick = $('#shoot')
  var turn = 1
  var player1 = {
    team: 'home',
    score: 0,
    attemptNum: 0,
    attemts: ['1stP1', '2ndP1', '3rdP1', '4thP1', '5thP1']
    // scoreBoard: $('#player1Score')
  }
  var player2 = {
    team: 'away',
    score: 0,
    attemptNum: 0,
    attemts: ['1stP2', '2ndP2', '3rdP2', '4thP2', '5thP2']
    // scoreBoard: $('#player2Score')
  }
  var kicked = false
  var result = (($kick.height() / $timer.height()) * 100)


   ////////////////////////////////////////
  ////****       FUNCTIONS       *****////
 ////////////////////////////////////////

  function whosTurn() {
    return (turn % 2 ? player2 : player1)
  }

  var currentPlayer = whosTurn();
  newShoot()
  //==Prepare to shoot
  if (kicked === false) {
    var kicked = true
    $('#btn').on('click', function() {
      ($kick).animate({
        height: '100%'
      }, 1000, function() {
        alert(currentPlayer.score + " Time is up, you missed your shoot" + result)
        setTimeout(newShoot, 60);
        turn++

      });
    })
  }

  $('#btn2').click(function() {
    ($kick).stop()
    var result = Math.round(($kick.height() / $timer.height()) * 100)

    if (result < 95) {
      alert(currentPlayer.score + " you missed it!  " + result)
      setTimeout(newShoot, 60);
      turn++

    } else {
      currentPlayer.score += 1
      turn++
      // console.log(whosTurn())
      alert(currentPlayer.score + " It's a goal!  ")
      setTimeout(newShoot(), 600)
      goal ()
      function goal(){
        for(var i = 0; i<currentPlayer.attemts; i++)
        if(currentPlayer.score !== 0){
          currentPlayer.addClass('goal')
        }
        else {
          currentPlayer.addClass('missed')
        }
      }
    }
  })

  function newShoot() {
    currentPlayer = whosTurn();
    console.log(currentPlayer);
    ($kick).animate({
      height: '0%'
    }, 60)
    kicked = false
  }










})
