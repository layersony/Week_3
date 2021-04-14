$(document).ready(function(){
  $("button#green").click(function(){
    $("body").removeClass();// removes all the class in the body tag
    $("body").addClass("green-background");// add new style to body
  });

  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#changebg").click(function(){
    $("#change").toggleClass("container-black");
  });

});