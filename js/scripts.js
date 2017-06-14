//business logic in the front
function rollDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min) + min;
}

//party logic in the back
$(document).ready(function() {
  $("#inputFields").submit(function(event) {
    event.preventDefault();

    var player1 = $("input#playerOne").val();
    var player2 = $("input#playerTwo").val();

    $("#nameInput").hide();
    $("#gameBoard").show();
  });


  $(".dice").click(function(event) {
    event.preventDefault();

    var min = 1;
    var max = 7;
    var roll = rollDice(min, max);
    $(".dice").hide();
    $("#rollBox").text(roll);
  });
});
