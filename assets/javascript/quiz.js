function handleClick()
  {         
var amountCorrect = 0;          
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    }
  }
 }                   
    document.querySelector('#correct').innerHTML = "You answered " + amountCorrect + " out of 8 questions correctly";
  }

 var number = 60;
    function run(){
      counter = setInterval(decrement, 1000);
    }
    function decrement(){
      number--;
      $('#show-number').html('<h2>' + number + '</h2>');
      if (number === 0){
        stop();
        alert('Time\'s Up!');
      }
    }
    function stop(){
      clearInterval(counter);
    }
  run();