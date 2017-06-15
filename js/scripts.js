//business logic in the front
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function dieFace(roll) {
//   if (roll === 1) {
//     return "<img src='img/die_face_1.png'>";
//   } else if (roll === 2) {
//     return "<img src='img/die_face_2.png'>";
//   } else if (roll === 3) {
//     return "<img src='img/die_face_3.png'>";
//   } else if (roll === 4) {
//     return "<img src='img/die_face_4.png'>";
//   } else if (roll === 5) {
//     return "<img src='img/die_face_5.png'>";
//   } else if (roll === 6) {
//     return "<img src='img/die_face_6.png'>";
//   }
// };

// function switchTurns(roll) {
//   var turnOver = [];
//   if (roll === 1) {
//     turnOver.push("YOUR TURN IS OVER!");
//   } else {
//     turnOver.push("");
//   }
//   return turnOver;
// };

function Player(playerName) {
  this.playerName = playerName;
  this.rollOutcome;
  this.dieFace;
  this.turnTotal = 0;
  this.grandTotal = 0;
};

Player.prototype.roll = function() {
  this.rollOutcome = getRandomIntInclusive(1, 6);
  return this.rollOutcome;
};

Player.prototype.die = function() {
  if (this.rollOutcome === 1) {
    this.dieFace = "<img src='img/die_face_1.png'>";
  } else if (this.rollOutcome === 2) {
    this.dieFace = "<img src='img/die_face_2.png'>";
  } else if (this.rollOutcome === 3) {
    this.dieFace = "<img src='img/die_face_3.png'>";
  } else if (this.rollOutcome === 4) {
    this.dieFace = "<img src='img/die_face_4.png'>";
  } else if (this.rollOutcome === 5) {
    this.dieFace = "<img src='img/die_face_5.png'>";
  } else if (this.rollOutcome === 6) {
    this.dieFace = "<img src='img/die_face_6.png'>";
  }
  return this.dieFace;
};

Player.prototype.addToTurn = function() {
  // if (this.rollOutcome !== 1) {
    this.turnTotal += this.rollOutcome;
  // }
  return this.turnTotal;
};

Player.prototype.addToGrand = function() {
  this.grandTotal += this.turnTotal;
  return this.grandTotal;
};

//party logic in the back
$(document).ready(function() {
  var player1name;
  var player2name;
  var player1;
  var player2;
  var changeTurns;

  $("#inputFields").submit(function(event) {
    event.preventDefault();

    player1name = $("input#playerOne").val();
    player2name = $("input#playerTwo").val();

    player1 = new Player(player1name);
    // player2 = new Player(player2name);

    $("#nameInput").hide();
    $(".playerOne").text(player1name);
    $(".playerTwo").text(player2name);
    $("#gameBoard").show();
  });


  $(".dice").click(function(event) {
    event.preventDefault();

    // diceRoll = dieFace(player1.rollOutcome);
    player1roll = player1.roll();
    // changeTurns = switchTurns(player1roll);

    $(".dice").empty();
    // changeTurns.forEach(function() {
    //   $(".dice").append("<h3>" + changeTurns + "</h3>")
    // });
    $(".dice").append(player1.die());
    $("#rollResult").text(player1roll);
    $("#p1-turnTotal").empty();
    $("#p1-turnTotal").append("<h4>Turn Total: " + player1.addToTurn() + "</h4>");
    console.log(player1roll);
    console.log(player1.turnTotal);
  });

  $("#holdButton").click(function(event) {
    event.preventDefault();

    $("#p1-grandTotal").empty();
    $("#p1-grandTotal").append("<h4>Grand Total: " + player1.addToGrand() + "</h4>");
  });

});
