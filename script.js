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
  var elements = [];
  var totalElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  function doTurn(player,element, id, count) {
    element.text(player);
    element.off('click');
     
    if(count === 1){
      Id = id;
      elements.push(Id);
      player = 'O';
        if (id !== 5){
          $('#5').append(player);
          elements.push(5);
        }
        else{
          $('#2').append(player);
          elements.push(2); 
        }
    }
    else { 

      player = 'O';
      Id = id;
      elements.push(Id);
      $.each(elements, function(index){
        var sum = (Id + this);
        console.log("total used: " + elements)
        var diff = $(totalElements).not(elements).get();
         console.log("empty: " + diff)
        var rand = diff[Math.floor(Math.random() * diff.length)];
        console.log("random empty: " + rand)
        var idBlock = document.getElementById(total-sum);
        var idBlockEmpty = document.getElementById(rand);


        if (sum !==10 && sum <=15 && $('idBlock:empty') ){
            $(idBlock).append(player);
            elements.push(total-sum); 
            return false;

        }
        else {
           $(idBlockEmpty).append(player);
           elements.push(rand);
            return false; 
            
        }
      });
    }
  }



  $('td').on('click', function() {
    count ++
    id = parseInt(this.id)
    doTurn('X',$(this), id, count);
  })


});






