// I used var here to make this a global variable
var compNum
// creating a function for the first game answer
function answerNum() {
  // let because it just needs to be accessible in this function, taking the string value of the minRangeNum input
  let firstMin = $("#minRangeNum").val();
  // let because it just needs to be accessible in this function, taking the string value of the maxRangeNum input
  let firstMax = $("#maxRangeNum").val();
  // let because it just needs to be accessible in this function, turning string into integer
  let min = parseInt(firstMin);
  // let because it just needs to be accessible in this function, turning string into integer
  let max = parseInt(firstMax);
  // declaring variable number before defining it...because it wouldn't work otherwise unless I used var
  let number;
  // checking to see if the inputs were actually numbers
  if(isNaN(min) || isNaN(max)) {
    // giving an alert if they were not numbers
    window.alert("These need to numbers")
    // making sure the inputs were not blank
  } else if (min === "" || max === "") {
    // giving an alert if they were
    window.alert("These need to numbers")
    // other option is that they were numbers
  } else {
    // letting the user know what the range was
    $(".rangeAlert").text(`Your range is ${min} - ${max}`)
    // defining variable number using the max/min
    number = Math.floor(Math.random() * (max - min + 1 ) ) + min;
  }
  // explicitly returning said variable
  return number
};
// defining a function for the game
function highOrLow() {
  // defining a variable of the users guess value
  let guess = $("#guessNum").val();
  // checking to see if the inputs were actually numbers
  if (isNaN(guess) || guess === "" || guess > 555) {
    // giving an alert if they were not numbers
    window.alert("This needs to be a number between 1 & 100")
    // checking to see if the guess was higher than the computer number
  } else if (guess > compNum) {
    // giving an alert as to which way they should guess
    $(".gameAlert").text("Your guess is too high.")
    // telling them their last guess was
    $(".previousGuessWords").text("Your last guess was")
    // telling them the number
    $(".previousGuess").text(guess)
    // checking to see if the guess was lowerer than the computer number
  } else if (guess < compNum) {
    // giving an alert as to which way they should guess
    $(".gameAlert").text("Your guess is too low.")
    // telling them their last guess was
    $(".previousGuessWords").text("Your last guess was")
    // telling them the number
    $(".previousGuess").text(guess)
    // checking to see if the guess was EQUAL TO the computer number
  } else if (guess == compNum) {
    // telling them they won
    $(".gameAlert").text("WINNER WINNER WINNER.")
    // telling them their winning guess was
    $(".previousGuessWords").text("Your WINNING guess was")
    // telling them the number
    $(".previousGuess").text(guess)
    // window alert about winning because window alerts are fun
    window.alert("BOOM! YOU WIN!!")
    // calling this function so that the range and computer number change
    winnerPlusTen();
  }
};
// defining the function that changes all the numbers once a user wins
function winnerPlusTen() {
  // takes the current inputted min and subtracts ten
  let secondMin = parseInt($("#minRangeNum").val()) - 10;
  // takes the current inputted max and subtracts ten
  let secondMax = parseInt($("#maxRangeNum").val()) + 10;
  // replaces those values in the input boxes
  $("#minRangeNum").val(secondMin.toString())
  // replaces those values in the input boxes
  $("#maxRangeNum").val(secondMax.toString())
  // creates new updated random number for range
  compNum = Math.floor(Math.random() * (secondMax - secondMin + 1 ) ) + secondMin;
  // gives an alert to the new range
  $(".rangeAlert").text(`Your range is ${secondMin} - ${secondMax}`)
  let secondGuess = $("#guessNum").val();
}
// what is supposed to happen when the page is ready
$(document).ready(function() {
  // when you click this button
  $("#submitRangeBtn").click(function(){
    // prevent the default action
    event.preventDefault();
    // declaring the first compNum
    compNum = answerNum();
    // once you click this button, you cannot click it any longer
    $("#submitRangeBtn").prop("disabled", true);
    // now the guess button is open to you
    $("#submitGuessBtn").prop("disabled", false);
    // don't show the "you must enter a range"
    $("p").hide();
    // when you click this button
  $("#submitGuessBtn").click(function(guess) {
    // and when you fill in this input
    $("#guessNum").keypress(function() {
      // this button is activated
      $("#clearGuessBtn").prop("disabled", false);
    })
    // when you click this button
    $("#clearGuessBtn").click(function(){
      // the value is replaced to empty
      $("#guessNum").val("");
      // and the button is disabled again
      $("#clearGuessBtn").prop("disabled", true);
    })
    // this button is open once a guess has been made
    $("#clearGameBtn").prop("disabled", false);
    // prevents the default action
    event.preventDefault();
    // calls high or low function
    highOrLow();
  });
});
// when you click this button
  $("#clearGameBtn").click(function() {
    // the page is reloaded, essentially starting the game over
    location.reload(true)
  })
});
