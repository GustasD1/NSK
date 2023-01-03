
var gameData = {
  movesP1: [],
  movesP2: [],
  token1: 'x',
  token2: 'o',
  score1: 0,
  score2: 0
}; 

var isOver = false; 
var size = 3; 
var turns = 0;
var toggle = true;
var compMoves;
var boardCheck;
var canSave = true;
if (localStorage === undefined) {
  canSave = false;
}

var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var arrayId = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];


$(document).ready(function() {

 
  if (canSave) {
    if(localStorage.gameData !== undefined) {
      gameData = JSON.parse(localStorage.getItem('gameData'));
      turns = JSON.parse(localStorage.getItem('turns'));
      isOver = JSON.parse(localStorage.getItem('isOver'));
      size = JSON.parse(localStorage.getItem('size'));
      toggle = JSON.parse(localStorage.getItem('toggle'));


      if(gameData.token1 === 'nigiri') {
        $("#tokenPair1").removeClass("selected");
        $("#tokenPair2").addClass("selected");
      }

      for (var i = 0; i < gameData.movesP1.length; i++) {
        $("#"+gameData.movesP1[i]).addClass(gameData.token1);
      }

      for (var i = 0; i < gameData.movesP2.length; i++) {
        $("#"+gameData.movesP2[i]).addClass(gameData.token2);
      }


      $("#player1 .num").text('' + gameData.score1);
      $("#player2 .num").text('' + gameData.score2);


      $('#message').text('Žaidimas pratęstas');
    }
  }


  var saveGame = function() {
    localStorage.setItem('gameData', JSON.stringify(gameData));
    localStorage.setItem('turns', JSON.stringify(turns));
    localStorage.setItem('isOver', JSON.stringify(isOver));
    localStorage.setItem('size', JSON.stringify(size));
    localStorage.setItem('toggle', JSON.stringify(toggle));
  };

  window.setTimeout(function () {
    $('#message').removeClass('fadeInUp');
  }, 1000); 
  var restart = function() {
    gameData.movesP1 = [];
    gameData.movesP2 = [];
    turns = 0;
    isOver = false;
    $("td").removeClass(gameData.token1).removeClass(gameData.token2);
    $("#message").text("Pradėkime žaidimą, Žaidėjas 1 pradeda")
  };

  $("#restart").on("click", function() {
    restart();
    saveGame();
  }); 
  $("#newgame").on("click", function() {
    gameData.score1 = 0;
    gameData.score2 = 0;
    restart();
    saveGame();
  });

    $("td").on("click", function() {
      if (isOver) {
        return;
      } 

      var token1 = gameData.token1;
      var token2 = gameData.token2;

      var marked = $(this); 

      if (marked.hasClass(token1) || marked.hasClass(token2)) {
        alert("Pasirinkite kitą langelį")
        return;
      }
      if (turns % 2 === 0) {
        $("#message").text("Žaidėjo 1 eilė"); 

        marked.addClass(token1).addClass("animated bounceIn"); 
        gameData.movesP1.push(this.id); 

        turns++;

        if ( checkWin(gameData.movesP1, size) ) {
          $("#message").text("Žaidėjas 1 laimėjo")
          isOver = true; 
          gameData.score1 += 1;
          $("#player1 .num").text('' + gameData.score1);
          saveGame();

        } else {

          if ( turns === size ** 2 ) {
            $("#message").text("Lygiosios")
            isOver = true;
            saveGame();
            return;
          } 

          $("#message").text("Žaidėjas 2 eilė")
          saveGame();
        }

      } else {
        $("#message").text("Žaidėjas 2 eilė")
        marked.addClass(token2).addClass("animated bounceIn");
        gameData.movesP2.push(this.id);

        turns++;

        if ( checkWin(gameData.movesP2, size) ) {
          $("#message").text("Žaidėjas 2 laimėjo")
          isOver = true;
          gameData.score2 += 1;
          $("#player2 .num").text('' + gameData.score2);
          saveGame();

        } else {

          if ( turns === size ** 2 ) {
            $("#message").text("Lygiosios")
            isOver = true;
            saveGame();
            return;
          }

          $("#message").text("Žaidėjas 1 eilė")
          saveGame();
        }
      }

    });
  var diagArr = function(size, booleanNum) {
      var row = [];
      var col = [];
      var diagonal = [];

      for (var i = 1; i <= size; i++) {
        i = String(i);
        row.push(i);

        if (booleanNum) {
            col.unshift(i);
          } else {
            col.push(i);
          }
        }

      for (var i = 0; i < row.length; i++) {
        diagonal.push(row[i] + col[i]);
      }
      return diagonal;
    };

  var checkDiag = function(diagonal, playerMoves) {

      for (var i = 0; i < diagonal.length; i++) {
        if (playerMoves.indexOf(diagonal[i]) === -1) {
          return false;
        }
      }
      return true;
  };

  var checkOther = function(playerMoves, size) { 
    var row = [];
    var col = [];

    for (var i = 0; i < playerMoves.length; i++) {
      row.push(Number(playerMoves[i][0]));
      col.push(Number(playerMoves[i][1]));
    }

    row.sort();
    col.sort();

    if (size === 3) {
      for (var i = 0; i < row.length; i++) {
        if (row[i] === row[i+1] && row[i] === row[i+2]) {
          return true;
        }
      }

      for (var i = 0; i < col.length; i++) {
        if (col[i] === col[i+1] && col[i] === col[i+2]) {
          return true;
        }
      }
      return false;
    } 
  };
  var checkWin = function(moves, size) {
    var diagonal1 = diagArr(size, 0);
    var diagonal2 = diagArr(size, 1);

    if ( checkDiag(diagonal1, moves) || checkDiag(diagonal2, moves) || checkOther(moves, size) ) {
      return true;
    }
    return false;
  };
}); 
