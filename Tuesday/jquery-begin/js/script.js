// jQuery('element') ===> $('element')
$(document).ready(function(){ // waits till the page is loaded to be excuted
  $('h1').click(function(){
    alert("This is a heading tag")
  });
  
  jQuery('p').click(function(){
    alert("This is a paragraph")
  });
  
  jQuery('img').click(function(){
    alert("This is an image")
  });
})
