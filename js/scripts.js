//business logic in the front
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function dieFace(roll) {
  if (roll === 1) {
    return "<img src='img/die_face_1.png'>";
  } else if (roll === 2) {
    return "<img src='img/die_face_2.png'>";
  } else if (roll === 3) {
    return "<img src='img/die_face_3.png'>";
  } else if (roll === 4) {
    return "<img src='img/die_face_4.png'>";
  } else if (roll === 5) {
    return "<img src='img/die_face_5.png'>";
  } else if (roll === 6) {
    return "<img src='img/die_face_6.png'>";
  }
};

function switchTurns(roll) {
  var turnOver = [];  
  if (roll === 1) {
    turnOver.push("YOUR TURN IS OVER!");
  } else {
    turnOver.push("");
  }
  return turnOver;
};

// function Player(playerName) {
//   this.playerName = playerName;
// };
//
// Player.prototype.rollOutcome() = function() {
//   return roll;
// };
//
// Player.prototype.turnTotal() = function() {
//   if (roll !== 1 ) {
//     turnTotal += roll;
//     return turnTotal;
//   } else {
//     turnTotal = 0;
//   }
// };
// Player.prototype.grandTotal() = function() {
// };

//party logic in the back
$(document).ready(function() {
  $("#inputFields").submit(function(event) {
    event.preventDefault();

    var player1name = $("input#playerOne").val();
    var player2name = $("input#playerTwo").val();

    $("#nameInput").hide();
    $(".playerOne").text(player1name);
    $(".playerTwo").text(player2name);
    $("#gameBoard").show();
  });


  $(".dice").click(function(event) {
    event.preventDefault();
    var roll = getRandomIntInclusive(1, 6);
    var diceRoll = dieFace(roll);
    var changeTurns = switchTurns(roll);
    // var turnTotal = ;
    // var player1 = new Player(player1name);
    // var player2 = new Player(player2name);
    // $(".switch").empty();
    $(".dice").empty();
    changeTurns.forEach(function() {
      $(".dice").append("<h3>" + changeTurns + "</h3>")
    });
    $(".dice").append(diceRoll);
    $("#rollResult").text(roll);
  });
});
