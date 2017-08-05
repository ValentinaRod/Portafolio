//jquery incializacion slider
$(document).ready(function(){
  $('.slider').slider();
});

//contacto------------------------------------>

// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
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

