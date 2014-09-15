$(document).ready(function(){
  $('td').hover();


  var turnOdd = true
  var total = 15
  var Id = 0


  var cell = function(row, col){
    return $('tr:eq(' + row + ') td:eq(' + col + ')');
  }


  function doTurn(player,element, id, count) {
      element.text(player);
      element.off('click');

    if(count === 1){
      Id = id
      player = 'O'
      if ( id !== 5){
        $('#5').append(player);
      }
      else{
        $('#2').append(player); 
      }
    }
    else if (count === 2){ 
      player = 'O'
      Id2 = id
      sum = Id + id
      console.log('sum1: ' + sum)
      var idBlock = document.getElementById(total-sum)


      $(idBlock).append(player);
      
    }
     else if (count === 3){ 
      player = 'O'
      Id3 = id
      sum2 = Id + id
      sum3 = Id2 + Id3
      console.log('sum2: ' + sum2)
      console.log('sum3: ' + sum3)
      if(sum2<15){
        var idBlock = document.getElementById(total-sum2)
        $(idBlock).append(player);
      }
      else{
        var idBlock = document.getElementById(total-sum3)
        $(idBlock).append(player);
      }

    }
    else if (count === 4){ 
      player = 'O'
      id4 = id
      sum1 = Id3 + id
      console.log('sum1: ' + sum1)
      var idBlock = document.getElementById(total-sum3)
      $(idBlock).append(player);
    }
     else if (count === 5){ 
      player = 'O'
       id5 = id
      sum4 = Id4 + id
      console.log('sum4: ' + sum4)
      var idBlock = document.getElementById(total-sum4)
      $(idBlock).append(player);
    }
      //top row
     
  }



var count = 0  


  $('td').on('click', function() {
    count ++
    id = parseInt(this.id)
    doTurn('X',$(this), id, count);

     // if(cell(0,0).text()=== player && cell(0,0).text() === cell(0,1).text()&& cell(0,0).text()===cell(0,2).text()){
     //    alert("Player " + player +  " wins!");
     //  }
     //  //middle row
     //  else if (cell(1,0).text()=== player && cell(1,0).text() === cell(1,1).text()&& cell(1,0).text()===cell(1,2).text()){
     //    alert("Player " + player +  " wins!");
     //  }
     //  //bottom row
     //  else if (cell(2,0).text()=== player && cell(2,0).text() === cell(2,1).text()&& cell(2,0).text()===cell(2,2).text()){
     //    alert("Player " + player +  " wins!");
     //  }
     //  //right diag
     //  else if (cell(0,0).text()=== player && cell(0,0).text() === cell(1,1).text()&& cell(0,0).text()===cell(2,2).text()){
     //    alert("Player " + player +  " wins!");
     //  }
     //  //left diag
     //  else if (cell(0,2).text()=== player && cell(0,2).text() === cell(1,1).text()&& cell(0,2).text()===cell(2,0).text()){
     //    alert("Player " + player +  " wins!");
     //  }
     //  //right column
     //  else if (cell(0,0).text()=== player && cell(0,0).text() === cell(1,0).text()&& cell(0,0).text()===cell(2,0).text()){
     //    alert("Player " + player +  " wins!");
     //  }
     //  //middle column
     //  else if (cell(0,1).text()=== player && cell(0,1).text() === cell(1,1).text()&& cell(0,1).text()===cell(1,2).text()){
     //    alert("Player " + player +  " wins!");
     //  }
  })


});






