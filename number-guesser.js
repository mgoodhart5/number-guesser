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
    $(".previousGuess").text(guess)
  } else if (guess < answerNum) {
    $(".gameAlert").text("Your guess is too low.")
    $(".previousGuess").text(guess)
  } else if (guess == answerNum) {
    window.alert("BOOM! YOU WIN!!")
  }
};

$(document).ready(function() {
  $("#submitGuess").click(function(guess) {
    $("#clearGameBtn").show();
    event.preventDefault();
    highOrLow();
  });
  $("#clearGameBtn").click(function() {
    location.reload()
  })
});
