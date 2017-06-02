//AUDIO FILES, HERE TO RENDER BETTER
var goalSound   = new Audio('Media/Audio/goalSound.mp3')
var crowd       = new Audio('Media/Audio/crowd.mp3')
var crowd2      = new Audio('Media/Audio/crowd2.mp3')
var missedSound = new Audio('Media/Audio/missed.mp3')
var intro       = new Audio('Media/Audio/intro.mp3')
var retry       = new Audio('Media/Audio/retry.mp3')


$(document).ready(function() {
    intro.play()


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
  // var result = (($kick.height() / $timer.height()) * 100)
  var currentPlayer = whoseTurn();

  ////////////////////////////////////////
  ////****       FUNCTIONS       *****////
  ////////////////////////////////////////

  window.onload = function() {
      player1.team = prompt('What is your team?')
      player2.team = prompt('Welcome '+ player1.team + ' who are you playing against?')
      if (player1.team == player2.team){
        alert (player1.team + ' has already been chosen, please select another team')
        player2.team = prompt('What team will play agaisnt '+ player1.team)
      }
      $('#home').text(player1.team)
      $('#away').text(player2.team)
      soundControl()
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


  function keyPressed(e) {
    e.stopPropagation()
    if (kicked === false) {
      ($kick).animate({
        height: '100%'
      }, 500, function() {
        $('body').off('keydown', keyPressed)
        $('body').off('keyup', keyReleased)
        $('#onGameFeed').addClass('pop')
        $('#playerOn').removeClass('playing')
        $('#ball').addClass('ballOut')
        if ($('#audio').hasClass('unmuted')){
        missedSound.play()
        }
        setTimeout(newShot, 4000)
        $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('missed');
        currentPlayer.attemptNum++
          turn++
      })
      kicked = true
    }
  }

  function keyReleased(e) {
    e.stopPropagation()
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
        if ($('#audio').hasClass('unmuted')){
        missedSound.play()
        }
          turn++
      } else {
        currentPlayer.score += 1
        $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('goal');
        currentPlayer.attemptNum++
        $('#ball').addClass('ballLeft')
        $('#goalkeeper').addClass('keeperMissed')
        $('#goal').addClass('pop')
        if ($('#audio').hasClass('unmuted')){
        goalSound.play()
        }
          turn++
        setTimeout(newShot, 4000)
      }
      $('#homeScore').text(player1.score)
      $('#awayScore').text(player2.score)
      if (winner()) {
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
    if (player2.attemptNum === 5||(player2.attemptNum === 3 && ((player1.score - player2.score < -2) || (player2.score - player1.score < -2)))||(player2.attemptNum === 4 && ((player1.score - player2.score < 2) || (player2.score - player1.score < 2)))) {
      if (player1.score > player2.score) {
        return player1.team + " wins the game!"
      } else if (player1.score < player2.score) {
        return player2.team + " wins the game!"
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

function soundControl(e) {
  $('#audio').prop('type', 'button')
  $('#audio').click(function(e) {
    e.preventDefault()
      if ($(e.target).is('#audio')) {
        if ($('#audio').hasClass("unmuted")) {
          crowd.pause()
          crowd2.pause()
          goalSound.pause()
          missedSound.pause()
          $('#audio').removeClass('unmuted').addClass('muted')
        } else {
          $('#audio').removeClass('muted').addClass('unmuted')
          crowd.play()
          crowd2.play()
        }
      }
  })
}
  // function onTie() {
  //
  // }

})
