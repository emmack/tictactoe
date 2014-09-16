$(document).ready(function(){
  // $('.header').hide();

  $('td').hover();



  var turnOdd = true
  var total = 15
  var Id = 0
  var numRand = Math.floor(Math.random() * 4) + 1
  var numRand1 = Math.floor(Math.random() * 4) + 1
  var elementIds = []
  var cell = function(row, col){
    return $('tr:eq(' + row + ') td:eq(' + col + ')');
  }


  function doTurn(player,element, id, count) {
      element.text(player);
      element.off('click');
     

    if(count === 1){
      Id = id
      elementIds.push(Id)
      console.log(elementIds)
      player = 'O'
      if ( id !== 5){
        $('#5').append(player);
      }
      else{
        $('numRand').append(player); 
      }
    }
    else if (count === 2){ 
      player = 'O'
      Id = id
      elementIds.push(Id)
      console.log(elementIds)
      $.each(elementIds, function(value){
      	console.log(value)
      	var sum = (Id + value)
		if (sum !==10){
        	var idBlock = document.getElementById(total-sum)
        	$(idBlock).append(player);
      	}
      else{
        var idBlock = document.getElementById(numRand)
        console.log("random: " + numRand)
        if(idBlock !==null){
          $(idBlock).append(player);
        }
        else{
        	var idBlock = document.getElementById(numRand1)
        	$(idBlock).append(player);
        }
      }
  });

    //   console.log('count: ' + count)
    //   console.log('sum: ' + sum)
    //   if (sum !==10){
    //     var idBlock = document.getElementById(total-sum)
    //     $(idBlock).append(player);
    //   }
    //   else{
    //     var idBlock = document.getElementById(numRand)
    //     console.log("random: " + numRand)
    //     if(idBlock !==null){
    //       $(idBlock).append(player);
    //     }
    //   }
      
    // }
     else if (count === 3){ 
      player = 'O'
      Id3 = id
      sum = Id + id
      sum1 = Id2 + Id3
      console.log('count: ' + count)
      console.log('sum: ' + sum)
      console.log('sum1: ' + sum1)

      if(sum1>=15){
        var idBlock = document.getElementById(total-sum)
          if(idBlock !==null){
            $(idBlock).append(player);
          }
          else{
            var idBlock = document.getElementById(numRand)
            if(idBlock !==null){
              $(idBlock).append(player);
            }
          }
      }
      else{
        var idBlock = document.getElementById(total-sum1)
         if(idBlock !==null){
        $(idBlock).append(player);
      }
      }

    }
    else if (count === 4){ 
      player = 'O'
      Id4 = id
      sum = Id + id
      sum1 = Id2 + Id3
      sum2 = Id3 + id
      console.log('count: ' + count)
      console.log('sum1: ' + sum1)
      if(sum2 <15){
        var idBlock = document.getElementById(total-sum2)
        if(idBlock !==null){
          $(idBlock).append(player);
        }
        else{
          var idBlock = document.getElementById(numRand)
          if(idBlock !==null){
            $(idBlock).append(player);
          }
        }
    }
      else if(sum1<15){
        var idBlock = document.getElementById(total-sum1)
        if(idBlock !==null){
          $(idBlock).append(player);
        }
        else{
          var idBlock = document.getElementById(numRand)
          if(idBlock !==null){
            $(idBlock).append(player);
          }
        }
      }
      else{
         var idBlock = document.getElementById(total-sum2)
          $(idBlock).append(player);

      }
    
  }
     else if (count === 5){ 
      player = 'O'
      id5 = id
      sum4 = Id4 + id
      console.log('count: ' + count)
      console.log('sum4: ' + sum4)

      var idBlock = document.getElementById(total-sum4)
      if(idBlock !==null){
        $(idBlock).append(player);
      }
      else{
        var idBlock = document.getElementById(numRand)
        if(idBlock !==null){
          $(idBlock).append(player);
        }
    }
      //top row
     
  }
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