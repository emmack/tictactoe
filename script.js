$(document).ready(function(){
  // $('.header').hide();
  $('.audio').hide();

  $('td').hover();

// $(".audioDemo").bind("load",function(){
//         $(".alert-success").html("Audio Loaded succesfully");
//     });

// $(".audioDemo").trigger('load');

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
        
        if(rand === undefined){
          console.log("rand is undefined");
          if(($('#2').text()==="X" && $('#7').text()==="X" && $('#6').text()==="X") || ($('#9').text()==="X" && $('#5').text()==="X" && $('#1').text()==="X") ||( $('#4').text()==="X" && $('#3').text()==="X" && $('#8').text()==="X") || ($('#2').text()==="X" && $('#9').text()==="X" && $('#4').text()==="X") || (($('#7').text()==="X" && $('#5').text()==="X" && $('#3').text()==="X") )|| ($('#6').text()==="X" && $('#1').text()==="X" && $('#8').text()==="X") || ($('#2').text()==="X" && $('#5').text()==="X" && $('#8').text()==="X") || ($('#6').text()==="X" && $('#5').text()==="X" && $('#4').text()==="X")){
            $(".audio").trigger('play');
            alert("X is the winner!")
            
            return false
          }
          else if(($('#2').text()==="O" && $('#7').text()==="O" && $('#6').text()==="O") || ($('#9').text()==="O" && $('#5').text()==="O" && $('#1').text()==="O") || ($('#4').text()==="O" && $('#3').text()==="O" && $('#8').text()==="O") ||( $('#2').text()==="O" && $('#9').text()==="O" && $('#4').text()==="O") || ($('#7').text()==="O" && $('#5').text()==="O" && $('#3').text()==="O") || ($('#6').text()==="O" && $('#1').text()==="O" && $('#8').text()==="O") || ($('#2').text()==="O" && $('#5').text()==="O" && $('#8').text()==="O") ||( $('#6').text()==="O" && $('#5').text()==="O" && $('#4').text()==="O")){
            $(".audio").trigger('play');
            alert("Hal 9000 is the winner!")
            return false
          }
          else{
            $(".audio").trigger('play');
            alert("It is a tie!")
            return false
          }
        }


        else if(sum !==10 && sum <=15 && ($(idBlock).text() == "") ){
            console.log("sum is blah - idBlock is" + $(idBlock).attr("id"));
            $(idBlock).append(player);
            elements.push(total-sum); 
            return false;

        }
        else{
          console.log(idBlockEmpty)
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







