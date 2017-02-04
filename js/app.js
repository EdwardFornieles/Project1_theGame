$( document ).ready(function(){
//I need to set a timer that runs when a button
// is pushed
// that timer will be represented by the kickTime
//
var $time = $('#kickTime')
var $shoot = ('#shoot')
// $('body').on('click',($('#kickTime').animate({height:'0%'}))
var $container = $('#timer')


// //take turns.
// the player hits the button to start the penalty kick
// when the button is hit again it will determine based on height
// if the shoot is a goal or a miss


 //
 var $kick = false
 //  var $turn = function turn(){
  if($kick === false){
  $('#shoot').on('click', function kicking(){
    ($time).animate({height:'0%'}, 500);
    kicking.stop()})
}
  // } else if ($kick === true) {
    console.log("That's a goal!")
  // } $kick = true

// } else {



// }
  //  $('#shoot').stop()
// and an if else to run the turn function with original value of false


// var $result = function result(($('#timer').height / $('#kickTime').height))



// figure a way to stop with other click
// set a way to reset the kick after stoped

// once stop the motion, calculate a ratio between the two timers
// use that ratio to stablish a winning or losing value
//
})
