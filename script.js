$(document).ready(function(){
  // $('.header').hide();
  // $('.hidden').hide();

  $('td').hover();



  // $('form').submit(function() {
  //       var name = $( "input:first" ).val();
  //       console.log( this);
  //         $(this).hide('fast', function(){
  //           var name = $( "input:first" ).val();
  //           $('.answer').text("Hello " + name + ", would you like to play a game? I must warn you, I am very good.");
             
  //           // $('.answer').hide('fast', function(){
  //           //     $('.hidden').show();
  //           //     var answer = $( "input:first" ).val();
  //           //     if(answer ==="yes"){
  //           //       $('.header').show();
  //           //     }
  //           //     else{
  //           //       alert("too bad")
  //           //     }
  //           //   });
  //         });
  //         return false
  //       });
            

    //       $('form1').submit(function() {
    //     $('#question2').show();
    //   $('.answer').hide();
    //       $(this).hide('fast', function(){
    //         var answer = $( "input:first" ).val();
    //         if(answer ==="yes"){
    //         $('.header').show();
    //       }
    //     else{
    //       alert("too bad")
    //     }
    //   });
    //   return false;
    // });

    //       });
    //     return false;
    // });
          
  var total = 15;
  var Id = 0;
  var count = 0;
  var elementsX = [];
  var elementsO = [];
  var elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var cell = function(row, col){
    return $('tr:eq(' + row + ') td:eq(' + col + ')');
  }


  function doTurn(player,element, id, count) {
    element.text(player);
    element.off('click');
     
    if(count === 1){
      Id = id;
      elementsX.push(Id);
      player = 'O';
        if (id !== 5){
          $('#5').append(player);
          elementsO.push(5);
        }
        else{
          $('#2').append(player);
          elementsO.push(2); 
        }
    }
    else { 

      player = 'O';
      Id = id;
      elementsX.push(Id);
      console.log(elementsX);
      $.each(elementsX, function(index){
        var sum = (Id + this);
        var totalElements = elementsX.concat(elementsO)
        var diff = $(elements).not(totalElements).get();
        console.log('DIFF', diff);
        var rand = diff[Math.floor(Math.random() * diff.length)];
        console.log('RANDOM', rand);
        var idBlock = document.getElementById(total-sum);
        var idBlockEmpty = document.getElementById(rand);
        if (sum !==10 && sum <=15 && $('idBlock:empty') ){
            $(idBlock).append(player);
            elementsO.push(total-sum); 
              return false;

        }
        else{
           $(idBlockEmpty).append(player);
           console.log("ID BLOCK EMPTY", rand);
           elementsO.push(rand);
            return false;

             
        }
        // else{
        //   var totalX = elementsX.reduce(function(a, b) {
        //       return a + b;
        //     });
        //     var totalO = elementsO.reduce(function(a, b) {
        //       return a + b;
        //     });
        //   if(totalX === 15){
        //     alert("X is the winner!")
        //   }
        //   else if(totalO === 15){
        //     alert("Hal 9000 is the winner!")
        //   }
        //   else{
        //     alert("It was a tie")
        //   }
        // }
      });
    }
  }



  $('td').on('click', function() {
    count ++
    id = parseInt(this.id)
    doTurn('X',$(this), id, count);
  })


});






