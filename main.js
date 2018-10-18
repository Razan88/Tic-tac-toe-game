$(document).ready(function () {
  var wins = ["123", "456", "789", "147", "258", "369", "357", "159"];
  var newCounter = 0;
  var i = 1;
  var oArr = [];
  var xArr = [];
  var current;
  var isGameOver = false;
  var cells = $("td").length;


  $(".sqr").click(function () {
    console.log('click');
    if (isGameOver === false) {
      if (i % 2 === 0) {
        $(this).text("O").addClass("sqrO");
        i = 1;
        current = 'O';
        oArr += $(this).attr("id");
        window.setTimeout(function () {
          newCounter++;
          checkWinCondition(oArr);
        }, 100);
      }

      else {
        // console.log($(this).attr("id"));
        $(this).text("X").addClass("sqrX");
        i = 0;
        current = 'X';
        xArr += $(this).attr("id");
        window.setTimeout(function () {
          newCounter++;
          checkWinCondition(xArr);
        }, 100);
      }
    }
  });

  function checkWinCondition(playerArr) {
    playerArr = playerArr.split("").sort().join("");

    if (newCounter === 9) {
      swal("nobody wins");
    }

    for (var j = 0; j < wins.length; j++) {
      if (playerArr.includes(wins[j][0]) && playerArr.includes(wins[j][1]) && playerArr.includes(wins[j][2])) {
        // alert(current + " is the winner ");
        swal({
          type: 'success',
          title: "congratulation",
          text: current + " is the winner"
        });
        isGameOver = true;
      }
    }

    console.log('newCounter is ', newCounter);


  }


  $(".button").click(function () {
    location.reload();
  });
});

