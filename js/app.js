$( document ).ready(function(){


///////////////////////////////////////////////////////////////////////////////
////////////////////        THIRD ATTEMPT          ///////////////////////////
///////////////////////////////////////////////////////////////////////////////


  //                         ¯\(°_o)/¯




//////////********** GLOBAL VARIABLES **********////////////
//
// var $timer = $('#timer')
// var $shoot = $('#shoot')
// var $ready = $('#btn')
// var $kickIt = $('#btn2')
// var $score = [0,0,0,0,0,0,0,0,0,0]
// var kick = false
//
//
// //////////**********    FUNCTIONS     **********////////////
//
// // for(var i = 0; i<$score.length; i++){
// // if (kick === false) {
//   ($ready).on('click', (($shoot).animate({height:'100%'}, 600)))
// // }
//   // console.log ('you missed the shoot!')
//
//   // } else if( kick === true ) {
//     ($kickIt).on('click', ($shoot).stop())
//     console.log ('you shoot!')
//
//   var result = (($timer.height/$shoot.height)*100)
//
//   if(result<95){
//   console.log('the goalkeeper catched it!')
//   }
//   else if (result>95) {
//   console.log("It's a goal!")
//   }
//   // kick = true
//
//
//

//
// else if (kick=== true) {
//
// }





///////////////////////////////////////////////////////////////////////////////
////////////////////        SECOND ATTEMPT          ///////////////////////////
///////////////////////////////////////////////////////////////////////////////

//****    GLOBAL VARIABLES    *****////
var $timer = $('#timer')
var $kick = $('#shoot')
var turn = 1
var player1 = {
    team: 'home',
    score: 0,
    scoreBoard: $('#player1Score')
  }
var player2 = {
    team: 'away',
    score: 0,
    scoreBoard: $('#player2Score')
  }
var $score = player1.scoreBoard() && player2.scoreBoard()
var kicked = false
var result = (($timer.height()/$kick.height())*100)

////****    FUNCTIONS     *****////

// player.score / score.player =



newShoot()
whoShoots()
    //==Prepare to shoot
    // for(var i = 0; i<$score.length; i++)
     if(kicked === false) {
       var kicked =true
        $('#btn').on('click', function(){
        ($kick).animate({height:'0%'}, 1000);
        })
    }

        $('#btn2').click(function(){
        ($kick).stop()
    var result = (($timer.height()/$kick.height())*100)

    if(result<1500){
      alert($score + " you missed it!")
      setTimeout(newShoot, 1000);
    }
      // newShoot()

    else if(result>12500){
      alert($score + " Time is up, you missed your shoot")
      setTimeout(newShoot, 1000);

    }else {
      $score += 1
      turn++
      alert($score + " It's a goal!" + turn)
    setTimeout(newShoot(), 3000)

      }
      })
      function newShoot(){
        ($kick).animate({height:'100%'}, 60)
      var kicked = false}



//
function whoShoots(){
  return (turn % 2 ? 'player1': 'player2')
}

///QUESTIONS
// 0- WHY RESULT HAS SUCH A RANDOM RESULT
// 1- HOW TO MAKE THE CLICK UNCLICABLE AFTER THE FIRST GET ready
// 2- HOW TO RESET THE turns
// 3- HOW TO SET A SCORE BOARD TO THE BEST OF 5 WITH 1 EXTRA ON TIE
// 4- HOW TO SET UP THE MATH RANDOM FOR TRAJECTORY ON THE BALL
// 5-


/////////////////////////////////////////////////////////////////////////////
////////////////             FIRST ATTEMPT             //////////////////////
/////////////////////////////////////////////////////////////////////////////

//I need to set a timer that runs when a button
// is pushed
// that timer will be represented by the kickTime
//
// var $time = $('#kickTime')
// var $shoot = ('#shoot')
// // $('body').on('click',($('#kickTime').animate({height:'0%'}))
// var $container = $('#timer')
//
//
// // //take turns.
// // the player hits the button to start the penalty kick
// // when the button is hit again it will determine based on height
// // if the shoot is a goal or a miss
//
//
//  //
//  //  var $turn = function turn(){
// if($kick === false){
//   var $kick = false
//     var $kicking = $('#shoot').on('click', function kicking(){
//     $('#kickTime').animate({height:'0%'}, 5000)})
//     animate.stop()
//
//     console.log('you miss the shoot!')
//
//
// } else if ($kick === true){
//
//     console.log('you win!')
// }
//     $('#shoot').on('click', function goal(){
//     $('kickTime').stop()})
// {
//     $kick = true
// }
//
//     // what to do if the value of $kick is true?????
//
//
//     // kicking.stop()})
//
//   // } else if ($kick === true) {
//     // console.log("That's a goal!")
//   // } $kick = true
//
// // } else {
//
//
//  }
//   //  $('#shoot').stop()
// // and an if else to run the turn function with original value of false
//
//
// // var $result = function result(($('#timer').height / $('#kickTime').height))
//
//
// figure a way to stop with other click
// // set a way to reset the kick after stoped
//
// // once stop the motion, calculate a ratio between the two timers
// // use that ratio to stablish a winning or losing value
// //
})
