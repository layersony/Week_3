$(document).ready(function(){
  $("button#view-more").click(function(){
    var index = $(this).index(),
    newTarget = $('.text').eq(index).toggle();
    $('.text').not(newTarget).fadeIn()
  });
});
