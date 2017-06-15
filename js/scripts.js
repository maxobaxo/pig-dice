//business logic in the front
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

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
  if (this.rollOutcome !== 1) {
    this.turnTotal += this.rollOutcome;
  } else {
    var turnOver = [];
    this.turnTotal = 0;
  }
  return this.turnTotal;
};

// Player.prototype.addToGrand = function() {
//   this.grandTotal += this.turnTotal;
//   return this.grandTotal;
// };

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

  $(".die1").click(function(event) {
    event.preventDefault();

    player1roll = player1.roll();

    $(".die1").empty();
    $(".die1").append(player1.die());
    $(".die1").append("<h3>" + "You rolled a: " + "<span class='rollResult'></span></h3>");
    $(".rollResult").text(player1roll);
    $("#p1-turnTotal").empty();
    $("#p1-turnTotal").append("<h4>Turn Total: " + player1.addToTurn() + "</h4>");
    $("#button-show1").show();
    if (player1roll === 1) {
      $("#button-show1").hide();
      $(".die1").hide();
      $(".die2").append("<h4>" + "YOUR TURN IS OVER, PIG!" + "</h4>" + "<h5>Next player roll.</h5>");
       $(".die2").show();
    }
  });

  // $("#p1-holdButton").click(function(event) {
  //   event.preventDefault();
  //
  //   $("#p1-grandTotal").empty();
  //   $("#p1-grandTotal").append("<h4>Grand Total: " + player1.addToGrand() + "</h4>");
  // });

});
