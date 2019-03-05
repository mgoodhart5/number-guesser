// pick random game answer 1-100
var answerNum = Math.floor((Math.random() * 100) + 1);
// guessed number

var highOrLow = function() {
  var guess = $("#guessNum").val();
  // var diffenceOfNums = compareNums(guess, answerNum);
  if (isNaN(guess) || guess === "" || guess > 100) {
    window.alert("This needs to be a number between 1 & 100")
  } else if (guess > answerNum) {
    $(".gameAlert").text("Your guess is too high.")
    $(".previousGuessWords").text("Your last guess was")
    $(".previousGuess").text(guess)
  } else if (guess < answerNum) {
    $(".gameAlert").text("Your guess is too low.")
    $(".previousGuessWords").text("Your last guess was")
    $(".previousGuess").text(guess)
  } else if (guess == answerNum) {
    $(".gameAlert").text("WINNER WINNER WINNER.")
    $(".previousGuessWords").text("Your WINNING guess was")
    $(".previousGuess").text(guess)
    window.alert("BOOM! YOU WIN!!")
  }
};

$(document).ready(function() {
  $("#submitGuessBtn").click(function(guess) {
    $("#clearGameBtn").prop("disabled", false);
    $("#clearGuessBtn").prop("disabled", false);
    event.preventDefault();
    highOrLow();
  });
  $("#clearGameBtn").click(function() {
    location.reload(true)
  })
});
