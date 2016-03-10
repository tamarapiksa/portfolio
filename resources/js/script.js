$(document).ready(function(){

  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down"){
        $('nav').addClass('sticky');
        $('.main-nav.js--main-nav').append('<li class="sticky-skills"><a href="#skills">Skills</a></li>');    
        $('.main-nav').append('<li class="sticky-skills"><a href="#projects">Projects</a></li>');
    } else {
        $('nav').removeClass('sticky');
        $('.sticky-skills').remove();
        $('.sticky-skills').remove();
    }
  }, {
    offset: '60px'
  });

  $('.js--scroll-to-skills').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-skills').offset().top}, 1000);
  });
   $('.js--scroll-to-projects').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
  });
  
   $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


   $('.js--wp-1').waypoint(function(direction){
      $('.js--wp-1').addClass('animated fadeIn');
   }, {
    offset: '50%'
   });

   $('.js--nav-icon').click(function(){
      var nav = $('.js--main-nav');
      var icon =$('.js--nav-icon i');
      
      nav.slideToggle(200);
      if (icon.hasClass('ion-navicon-round')){
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round')

      } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
      }
   });

$(function(){
    $('.parent').mouseenter(function(){
        $(this).children('.child').fadeIn();
    }).mouseleave(function(){
        $(this).children('.child').fadeOut();
    });
});


});