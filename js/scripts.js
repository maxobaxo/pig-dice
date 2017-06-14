//business logic in the front
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
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


    var roll = getRandomIntInclusive(1, 6);
console.log(roll);
    $(".dice").hide();
    $("#rollResult").text(roll);
  });
});
