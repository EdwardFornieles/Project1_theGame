//AUDIO FILES, HERE TO RENDER BETTER
var goalSound   = new Audio('Media/Audio/goalSound.mp3')
var crowd       = new Audio('Media/Audio/crowd.mp3')
var crowd2      = new Audio('Media/Audio/crowd2.mp3')
var missedSound = new Audio('Media/Audio/missed.mp3')
var intro       = new Audio('Media/Audio/intro.mp3')
var retry       = new Audio('Media/Audio/retry.mp3')


$(document).ready(function() {
    intro.play()
    soundControl()

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
      if ($('#audio').hasClass('unmuted')){
      intro.pause()
      retry.pause()
      crowd.play()
      crowd.onended = function(){
	       this.play()
       }
       crowd2.play()
       crowd2.onended = function(){
         this.play()
       }
     } else {
       intro.pause()
       crowd.pause()
       crowd2.pause()
       goalSound.pause()
       missedSound.pause()
     }
      newShot()
    })
  }
  //==Prepare to shoot

  console.log('running')


  function keyPressed() {

    if (kicked === false) {
      ($kick).animate({
        height: '100%'
      }, 500, function() {
        $('body').off('keydown', keyPressed)
        $('body').off('keyup', keyReleased)
        $('#onGameFeed').addClass('pop')
        $('#playerOn').removeClass('playing')
        $('#ball').addClass('ballOut')
        missedSound.play()
        setTimeout(newShot, 4000)
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
      $('#playerOn').removeClass('playing')
      $('body').off('keydown', keyPressed)
      $('body').off('keyup', keyReleased)
      var result = Math.round(($kick.height() / $timer.height()) * 100)
      if (result < 90) {
        setTimeout(newShot, 4000);
        $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('missed');
        currentPlayer.attemptNum++
        $('#notGoal').addClass('pop')
        $('#ball').addClass('ballCatched')
        $('#goalkeeper').addClass('keeperCatched')
        missedSound.play()
          turn++
      } else {
        currentPlayer.score += 1
        $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('goal');
        currentPlayer.attemptNum++
        $('#ball').addClass('ballLeft')
        $('#goalkeeper').addClass('keeperMissed')
        $('#goal').addClass('pop')
        goalSound.play()
          turn++
        setTimeout(newShot, 4000)
      }
      $('#homeScore').text(player1.score)
      $('#awayScore').text(player2.score)
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
    ($kick).animate({
      height: '0%'
    }, 1000).promise().done(function() {
      kicked = false
      $('#playerOn').addClass('playing')
      $('.playing').html(currentPlayer.team+"'s turn")
      $('#onGameFeed').removeClass('pop')
      $('#notGoal').removeClass('pop')
      $('#goal').removeClass('pop')
      $('#ball').removeClass('ballLeft')
      $('#ball').removeClass('ballOut')
      $('body').on('keydown', keyPressed)
      $('body').on('keyup', keyReleased)
      $('#ball').removeClass('ballCatched')
      $('#goalkeeper').removeClass('keeperCatched')
      $('#goalkeeper').removeClass('keeperMissed')
    })
  }

  function whoseTurn() {
    return (turn % 2 ? player2 : player1)
  }

  function winner() {
    if (player2.attemptNum === 5 || (player2.attemptNum === 3 && ((player1.score - player2.score < 0) || (player2.score - player1.score < 0)))) {
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
      var msg = confirm(winner() + " , Play Again?");
      if (msg) {
      player1.score = 0
      player2.score = 0
      player1.attemptNum = 0
      player2.attemptNum = 0
      $('.attempt').removeClass('missed goal')
      $('#homeScore').text(player1.score)
      $('#awayScore').text(player2.score)
      turn = 0
    } else {
      if (winner !== "It's a Tie")
        alert('Thank you for playing')
    }
  }
  
function soundControl() {
  $('#audio').on("click", function() {
    console.log('here')
    if ($('#audio').hasClass("unmuted")) {
      console.log($('#audio').class)
      crowd.pause()
      crowd2.pause()
      goalSound.pause()
      missedSound.pause()
      $('#audio').removeClass('unmuted').addClass('muted')
    } else {
      $('#audio').removeClass('muted').addClass('unmuted')
      crowd.play()
      crowd2.play()
      // goalSound.play()
      // missedSound.play()
    }
  })
}
//possible F(X) to add sound // STRETCH
//   function goalSound(elem, path) {
//   $('<source>').attr('src', path).appendTo(elem);
// }
//
// $(".goal").mouseenter(function(){
//      var audio = $('<audio />', {
//        autoPlay : 'autoplay'
//      });
//      addSource(audio, 'audio/'+Math.ceil(Math.random() * 5)+'.mp3');
//      addSource(audio, 'audio/'+Math.ceil(Math.random() * 5)+'.ogg');
//      audio.appendTo('body');
// });



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
