//business logic
var add = function(number1, number2){
  return number1 + number2
}
var sub = function(number1, number2){
  return number1 - number2
}

var multi = function(number1, number2){
  return number1 * number2
}
var divide = function(number1, number2){
  return number1 / number2
}

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault() // stop the form from submmiting the data
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    let total = (add(number1,number2));

    $("#output").text(total);
  });
});

