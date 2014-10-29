$(document).ready(function(){

// Set global variables
var i = 0;

/*--- Display information modal box ---*/
$(".what").click(function(){
  $(".overlay").fadeIn(1000);
});

/*--- Hide information modal box ---*/
$("a.close").click(function(){
  $(".overlay").fadeOut(1000);
});

// Reload game on "New Game" click
$(".new").on("click", function() {
  location.reload();
  event.preventDefault();
});

// generate random number between 1 and 100
var randomInt = Math.floor(Math.random() * 100) + 1;
  $(".randomInt").text(randomInt);

// take user's guess, do error detection and give feedback
$("#guessButton").on("click", function(event) {
  event.preventDefault();
  var userGuess = $("#userGuess").val();

  // clear form field after guess 
  $("#userGuess").val("");

  // error detection on guess
  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    $("#feedback").text("Choose a number between 1 and 100!");
  }
  else {
    // add guess to list and increment no. of guesses
    $("#guessList").append("<li>" + userGuess + "</li>");
    $("#count").text(++i);
    
    // give feedback on guess
    var diff = Math.abs(userGuess - randomInt);

    if (randomInt === +userGuess) {
      $("#feedback").text("You got it! And it took you a mere " + i + " guesses. Next stop: Vegas");
    }
    else if (diff < 3) {
      $("#feedback").text("Can you hear the sound of burning? (very hot)");
    }
    else if (diff < 8) {
      $("#feedback").text("You are standing too close to the fire. (hot)");
    }
    else if (diff < 15) {
      $("#feedback").text("You are a safe distance from the fire. (warm)");
    }
    else if (diff < 25) {
      $("#feedback").text("You can start to feel your toes again. (tepid)");
    }
    else if (diff < 40) {
      $("#feedback").text("I hope you brought some winter clothes. (cold)");
    }
    else {
      $("#feedback").text("Oh good. It's time to share some body heat. (freezing cold)");
    }
  }
});

});