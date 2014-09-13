$(document).ready(function(){
  $('td').hover();
  $("div").hide();

  var turnOdd = true
  var cell = function(row, col){
  	return $('tr:eq(' + row + ') td:eq(' + col + ')');
  }


  function doTurn(player,element) {
          element.text(player);
          element.off('click');

          turnOdd = !turnOdd;
  		
  		if((cell(0,0).text())=== player && (cell(0,0).text()) === (cell(0,1).text())&& (cell(0,0).text())===(cell(0,2).text())){
  			alert("Player " + player +  " wins!");
  		}
  		else if ((cell(1,0).text())=== player && (cell(1,0).text()) === (cell(1,1).text())&& (cell(1,0).text())===(cell(1,2).text())){
  			alert("Player " + player +  " wins!");
  		}
  		else if ((cell(2,0).text())=== player && (cell(2,0).text()) === (cell(2,1).text())&& (cell(2,0).text())===(cell(2,2).text())){
  			alert("Player " + player +  " wins!");
  		}
  		else if ((cell(0,0).text())=== player && (cell(0,0).text()) === (cell(1,1).text())&& (cell(0,0).text())===(cell(2,2).text())){
  			alert("Player " + player +  " wins!");
  		}
  		else if ((cell(0,2).text())=== player && (cell(0,2).text()) === (cell(1,1).text())&& (cell(0,2).text())===(cell(2,0).text())){
  			alert("Player " + player +  " wins!");
  		}

  }

  $('td').on('click', function() {
  	if (turnOdd) {
  		doTurn('X',$(this));
  	} else {
  		doTurn('O',$(this));
  	}
  })

  	// var cell = function(row, col){
  	// 	return $('tr:eq(' + row + ') td:eq(' + col + ')');
  	// };

	// function toWin(cell){
 //  		if((cell(0,0).text())==='X' && (cell(0,0).text()) === (cell(0,1).text())&& (cell(0,0).text())===(cell(0,2).text())){
 //  			console.log("Play X wins!")
 //  		}
	// 	else if((cell(1,0).text())==='O' && (cell(1,0).text()) === (cell(1,1).text())&& (cell(0,0).text())===(cell(1,2).text())){
 //  			alert("Play X wins!")
 //  		}

 //  	}
  
  // toWin();


});


// var oneOne = parseInt(cell(0, 0).text()) + parseInt(cell(0, 1).text()) + parseInt(cell(0, 2).text());
// var oneTwo = parseInt(cell(1, 0).text()) + parseInt(cell(1, 1).text()) + parseInt(cell(1, 2).text());
// var oneThree = parseInt(cell(2, 0).text()) + parseInt(cell(2, 1).text()) + parseInt(cell(2, 2).text());

// var twoOne = parseInt(cell(0, 0).text()) + parseInt(cell(0, 1).text()) + parseInt(cell(0, 2).text());
// var twoTwo = parseInt(cell(1, 0).text()) + parseInt(cell(1, 1).text()) + parseInt(cell(1, 2).text());
// var twoThree = parseInt(cell(2, 0).text()) + parseInt(cell(2, 1).text()) + parseInt(cell(2, 2).text());

// var threeOne = parseInt(cell(1, 0).text()) + parseInt(cell(1, 1).text()) + parseInt(cell(1, 2).text());
// var threeTwo = parseInt(cell(2, 0).text()) + parseInt(cell(2, 1).text()) + parseInt(cell(2, 2).text());
// var threeThree = parseInt(cell(2, 0).text()) + parseInt(cell(2, 1).text()) + parseInt(cell(2, 2).text());
