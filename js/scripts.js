//business logic
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
    console.log("this.dieFace in the .die method = " + this.dieFace);
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
    this.turnTotal = 0;
  }
  return this.turnTotal;
};

Player.prototype.addToGrand = function() {
  winnerArray = [];
  this.grandTotal += this.turnTotal;
  if (this.grandTotal < 20) {
    return this.grandTotal;
  } else {
    winnerArray.push("You win! You're the Big Pig!");
    return winnerArray;
  }
};

//party logic
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
    player2 = new Player(player2name);

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
    console.log(player1.dieFace);
    console.log(player1.die());
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

  $("#p1-holdButton").click(function(event) {
    event.preventDefault();

    $("#p1-grandTotal").empty();
    $("#p1-grandTotal").append("<h4>Grand Total: " + player1.addToGrand() + "</h4>");
    if (player1.grandTotal >= 20) {
      $("#playing-field").hide();
      $("#winning-player").text(player1.playerName);
      $("#victory").show();
    }
    player1.turnTotal = 0;
    $("#p1-turnTotal").empty();
    $("#p1-turnTotal").append("<h4>Turn Total: " + player1.turnTotal + "</h4>");
    $("#button-show1").hide();

    $(".die1").hide();
    $(".die2").empty();
    $(".die2").append("<img id='start-die' src='img/question-die.jpg' alt='picture of die'>");
    $(".die2").append("<h4>" + "Good Call." + "</h4>" + "<h5>Next player roll.</h5>");
    $(".die2").show();
  });

  $(".die2").click(function(event) {
    event.preventDefault();

    player2roll = player2.roll();

    $(".die2").empty();
    $(".die2").append(player2.die());
    $(".die2").append("<h3>" + "You rolled a: " + "<span class='rollResult'></span></h3>");
    $(".rollResult").text(player2roll);
    $("#p2-turnTotal").empty();
    $("#p2-turnTotal").append("<h4>Turn Total: " + player2.addToTurn() + "</h4>");
    $("#button-show2").show();
    if (player2roll === 1) {
      $("#button-show2").hide();
      $(".die2").hide();
      $(".die1").append("<h4>" + "YOUR TURN IS OVER, SOW!" + "</h4>" + "<h5>Next player roll.</h5>");
      $(".die1").show();
    }
  });

  $("#p2-holdButton").click(function(event) {
    event.preventDefault();

    $("#p2-grandTotal").empty();
    $("#p2-grandTotal").append("<h4>Grand Total: " + player2.addToGrand() + "</h4>");
    if (player2.grandTotal >= 20) {
      $("#playing-field").hide();
      $("#winning-player").text(player2.playerName);
      $("#victory").show();
    }
    player2.turnTotal = 0;
    $("#p2-turnTotal").empty();
    $("#p2-turnTotal").append("<h4>Turn Total: " + player2.turnTotal + "</h4>");
    $("#button-show2").hide();

    $(".die2").hide();
    $(".die1").empty();
    $(".die1").append("<img id='start-die' src='img/question-die.jpg' alt='picture of die'>");
    $(".die1").append("<h4>" + "Good Call." + "</h4>" + "<h5>Next player roll.</h5>");
    $(".die1").show();
  });
});
