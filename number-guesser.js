// pick random game answer 1-100
// function answerNum() = Math.floor((Math.random() * 100) + 1);
// trying new input stuff

function answerNum() {
  var firstMin = $("#minRangeNum").val();
  var firstMax = $("#maxRangeNum").val();
  var min = parseInt(firstMin);
  var max = parseInt(firstMax);
  if(isNaN(min) || isNaN(max)) {
    window.alert("These need to numbers")
  } else if (min === "" || max === "") {
    window.alert("These need to numbers")
  } else {
    $(".rangeAlert").text(`Your range is ${min} - ${max}`)
    var number = Math.floor(Math.random() * (max - min + 1 ) ) + min;
  }
  return number
};


function highOrLow(compNum) {
  var guess = $("#guessNum").val();
  if (isNaN(guess) || guess === "" || guess > 100) {
    window.alert("This needs to be a number between 1 & 100")
  } else if (guess > compNum) {
    $(".gameAlert").text("Your guess is too high.")
    $(".previousGuessWords").text("Your last guess was")
    $(".previousGuess").text(guess)
  } else if (guess < compNum) {
    $(".gameAlert").text("Your guess is too low.")
    $(".previousGuessWords").text("Your last guess was")
    $(".previousGuess").text(guess)
  } else if (guess == compNum) {
    $(".gameAlert").text("WINNER WINNER WINNER.")
    $(".previousGuessWords").text("Your WINNING guess was")
    $(".previousGuess").text(guess)
    window.alert("BOOM! YOU WIN!!")
  }
};

$(document).ready(function() {
  $("#submitRangeBtn").click(function(){
    event.preventDefault();
    const compNum = answerNum()
    $("#submitRangeBtn").prop("disabled", true);
    $("#submitGuessBtn").prop("disabled", false);
    $("p").hide();
  $("#submitGuessBtn").click(function(guess) {
    $("#guessNum").keypress(function() {
      $("#clearGuessBtn").prop("disabled", false);
    })
    $("#clearGuessBtn").click(function(){
      $("#guessNum").val("");
      $("#clearGuessBtn").prop("disabled", true);
    })
    $("#clearGameBtn").prop("disabled", false);
    event.preventDefault();
    highOrLow(compNum);
  });
});
  $("#clearGameBtn").click(function() {
    location.reload(true)
  })
});
