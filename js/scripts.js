//business logic in the front


//party logic in the back
$(document).ready(function() {
  $("#inputFields").submit(function(event) {
    event.preventDefault();
    var player1 = $("input#playerOne").val();
    var player2 = $("input#playerTwo").val();

    $("#nameInput").hide();


  });
});
