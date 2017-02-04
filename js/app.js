$( document ).ready(function(){

///////////////////////////////////////////////////////////////////////////////
////////////////////        SECOND ATTEMPT          ///////////////////////////
///////////////////////////////////////////////////////////////////////////////

var $shoot = false
var $kick = $('#shoot')
// for(var i=0; i<$kick.length; i++)
//  if ($shoot === false ){
$('#btn').on('click', function(){
  ($kick).animate({height:'0%'}, 10000)
})
// goal()
// }
$('#btn2').click(function(){
  $('#shoot').stop()})
// console.log('you missed your shoot')
// })
// console.log('goal!')

// var $shoot = true
// }









































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
