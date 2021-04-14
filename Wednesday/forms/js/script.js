// append() add to the existing content
// use text() or html() to replace the text when add content to html

$(document).ready(function(){
  $('#blanks').submit(function(event){
    // $("{where to be add to}").append({what to be added})
    // $(".person1").append('blah blah');
    // $(".person2").append('blah blah');
    // $(".animal").append('blah blah');
    // $(".exclamation").append('blah blah');
    // $(".verb").append('blah blah');
    // $(".noun").append('blah blah');

    // get info form forms

    let person1input = $("input#person1").val();
    let person2input = $("input#person2").val();
    let animalInput = $("input#animal").val();
    let exclamationInput = $("input#exclamation").val();
    let verbInput = $("input#verb").val();
    let nounInput = $("input#noun").val();

      // this will just append to the existing content
    // $(".person1").append(person1input);
    // $(".person2").append(person2input);
    // $(".animal").append(animalInput);
    // $(".exclamation").append(exclamationInput);
    // $(".verb").append(verbInput);
    // $(".noun").append(nounInput);

    $(".person1").text(person1input);
    $(".person2").text(person2input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
    event.preventDefault();

  });
});