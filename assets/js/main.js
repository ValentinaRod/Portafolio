//jquery incializacion slider
$(document).ready(function(){
  $('.slider').slider();
});


//home--------------------------------------------------------------->

$(document).ready(function(){
  
  var stickyNavTop = $('.custom-navbar').offset().top;
  
  //title
  $('#over-title-header').animate({top: '6vw'}, 1800);
  $('#under-title-header').animate({top: '6vw'}, 1800);

  
  // NavBar
      //Home
$(".home").click(function() {
    $('html,body').animate({
        scrollTop: $("html").offset().top},
        'slow');
});  
   //About
  
$(".about").click(function() {
    $('html,body').animate({
        scrollTop: $(".bio").offset().top + 1},
        'slow');
});  
   //Portfolio
$(".portfolio").click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top-50},
        'slow');
});  
   //Contact
$(".contact").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-me").offset().top-50},
        'slow');
});  
  
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
  $('.custom-navbar').removeClass('not-sticky');
    $('.custom-navbar').addClass('sticky');
  $('.title-page').css({
    'margin-bottom' : '100px'
  });
  $('.custom-navbar').css({
    'background-color':'rgba(0, 0, 0, 0.85)'
  });
  }
 else {
    $('.custom-navbar').removeClass('sticky'); 
  $('.custom-navbar').addClass('not-sticky');
   $('.title-page').css({
    'margin-bottom' : '60px'
  });
   $('.custom-navbar').css({
    'background-color':'#fff'
  });
}
};
  
stickyNav();
 
$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  if(scrollTop < 600){
  $('.title-header').css({
    'transform' : 'translateY('+ scrollTop/5 + 'px)'
  });
  $('.under-title-header').css({
     'transform' : 'translateY('+ scrollTop/5 + 'px)'
  });
  };  
  
  stickyNav();
  
 
});
});  

//efectos smoove para clases------------------------------------------------------->
$('.bio').smoove({
     offset  : '100%',
    // moveX is overridden to -200px for ".bar" object
    moveX   : '100px',
    moveY   : '100px',
});

//efecto portafolio--------------------------------------------->
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
