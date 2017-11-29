$( document ).ready(function(){
   
    //   The random number shown at the start of the game should be between 19 - 120.
  var Random=Math.floor(Math.random()*101+19)
  $('#randomNumber').text(Random);

  //   Each crystal should have a random hidden value between 1 - 12.
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

// Reset
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
// You win
function winning(){
alert("You win!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
// You lose
function losing(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

// Jewels on click random number assigned
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
     
        if (userTotal == Random){
          winning();
        }
        else if ( userTotal > Random){
          losing();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          winning();
        }
        else if ( userTotal > Random){
          losing();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
          if (userTotal == Random){
          winning();
        }
        else if ( userTotal > Random){
          losing();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          winning();
        }
        else if ( userTotal > Random){
          losing();
        }
  });   
}); 