$(document).ready(function(){
  $('td').hover();
  $("div").hide();

  var turnOdd = true

  var cell = function(row, col){
    return $('tr:eq(' + row + ') td:eq(' + col + ')');
  }


  function doTurn(player,element, id) {

    console.log(id)
    element.text(player);
    element.off('click');
      element.addClass("2")

    if(id === 1){
    
      $('#5').append('0'); 

    }
    else if(id === 3){
      element.addClass("6")
      $('#4').append('0'); 

    }

       else if(id === 6){
      element.addClass("4")
      $('#2').append('0'); 

    }
        else if(id === 8){
      element.addClass("8")
      $('#9').append('0');

    }
     else{
      element.addClass("8")
     alert("It's a tie!")
       
    }

    
    
  

      if(cell(0,0).text()=== player && cell(0,0).text() === cell(0,1).text()&& cell(0,0).text()===cell(0,2).text()){
        alert("Player " + player +  " wins!");
      }
      else if (cell(1,0).text()=== player && cell(1,0).text() === cell(1,1).text()&& cell(1,0).text()===cell(1,2).text()){
        alert("Player " + player +  " wins!");
      }
      else if (cell(2,0).text()=== player && cell(2,0).text() === cell(2,1).text()&& cell(2,0).text()===cell(2,2).text()){
        alert("Player " + player +  " wins!");
      }
      else if (cell(0,0).text()=== player && cell(0,0).text() === cell(1,1).text()&& cell(0,0).text()===cell(2,2).text()){
        alert("Player " + player +  " wins!");
      }
      else if (cell(0,2).text()=== player && cell(0,2).text() === cell(1,1).text()&& cell(0,2).text()===cell(2,0).text()){
        alert("Player " + player +  " wins!");
      }
  }

  $('td').on('click', function() {
    id = parseInt(this.id)
    doTurn('X',$(this), id);
    // console.log(id)
  })


});




// var $oneOne = parseInt(cell(0, 0).text()) + parseInt(cell(0, 1).text()) + parseInt(cell(0, 2).text());
// var $oneTwo = parseInt(cell(1, 0).text()) + parseInt(cell(1, 1).text()) + parseInt(cell(1, 2).text());
// var $oneThree = parseInt(cell(2, 0).text()) + parseInt(cell(2, 1).text()) + parseInt(cell(2, 2).text());

// var $twoOne = parseInt(cell(0, 0).text()) + parseInt(cell(0, 1).text()) + parseInt(cell(0, 2).text());
// var $twoTwo = parseInt(cell(1, 0).text()) + parseInt(cell(1, 1).text()) + parseInt(cell(1, 2).text());
// var $twoThree = parseInt(cell(2, 0).text()) + parseInt(cell(2, 1).text()) + parseInt(cell(2, 2).text());

// var $threeOne = parseInt(cell(1, 0).text()) + parseInt(cell(1, 1).text()) + parseInt(cell(1, 2).text());
// var $threeTwo = parseInt(cell(2, 0).text()) + parseInt(cell(2, 1).text()) + parseInt(cell(2, 2).text());
// var $threeThree = parseInt(cell(2, 0).text()) + parseInt(cell(2, 1).text()) + parseInt(cell(2, 2).text());

// var $rightDiagonal = parseInt(cell(0, 0).text()) + parseInt(cell(1, 1).text()) + parseInt(cell(2, 2).text());
// var $leftDiagonal = parseInt(cell(0, 2).text()) + parseInt(cell(1, 1).text()) + parseInt(cell(2, 0).text());





