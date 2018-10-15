$(document).ready(function () {
    // function startNewGame() {
    // 	score = {
    // 		"X": 0,
    // 		"O": 0
    // 	};
    // 	moves = 0;
    // 	turn = "X";
    // 	boxes.forEach(function (square) {
    // 		square.innerHTML = EMPTY;
    // 	});
    // }
    // var player ='X';
    /* var player1 = "X";
    var player2 = "O"; */
    var wins = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [7, 8, 9]
    ];

    var counter = 1;
    var i = 1;
    var oArr = [];
    var xArr = [];

    $(".sqr").click(function () {

        while ($(this).text() === '') {
            if (i % 2 === 0) {
                $(this).text("O").css("color","white");
                i = 1;
                oArr.push($(this).attr("id"));
                //console.log(oArr);

                console.log($(this).text());
            } else {
                $(this).text("X").css("color","yellow");;
                i = 0;
                xArr.push($(this).attr("id"));
                //console.log(xArr);
            }
        }
        $(".button").click(function(){
            location.reload();
        });

        // function checkWinner(arr) {
        //     if (xArr.length > 4 ){
        //         console.log("you");
        //     }

            // for (var i = 0; i < wins.length; i++) {
            //     if (wins[i] === 'X') {
            //         console.log("x wins");

        //         }

            
        
        //  checkWinner(xArr);

    });


})