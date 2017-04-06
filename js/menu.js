$(document).ready(function(){
  $(window).scroll(function(){
   var top = $(window).scrollTop();
   var find_class_small = $.contains('.nav', '.after');
 
   if(top > 90 && find_class_small == false) {
    $('.nav').addClass('after');
   }
   else {
    $('.nav').removeClass('after');
   }
 
  });
});