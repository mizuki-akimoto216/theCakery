// Animation
function fadeAnime(){

    $('.fadeUpTrigger').each(function(){
        var elemPos = $(this).offset().top-100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
        } else{
        $(this).removeClass('fadeUp');
        }
    });

    $('.bounceInLeftTrigger').each(function(){
        var elemPos = $(this).offset().top-50; 
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('animate__bounceInLeft');
        } else{
        $(this).removeClass('animate__bounceInLeft');
        }
    });
        
    $('.rubberBandTrigger').each(function(){ 
        var elemPos = $(this).offset().top-100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('animate__rubberBand');
        } else{
        $(this).removeClass('animate__rubberBand');
        }
    });
        
    $('.zoomInLeftTrigger').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('animate__zoomInLeft');
        } else{
        $(this).removeClass('animate__zoomInLeft');
        }
    });
        
    $('.zoomInTrigger').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('zoomIn');
        } else{
        $(this).removeClass('zoomIn');
        }
    });            
}    

// if scrolled
$(window).scroll(function (){
fadeAnime();
});

// if reload
$(window).on('load', function(){
fadeAnime();
});

// go back to top if scrolled
$(function () {
    const toTopButton = $(".js-to-top");
    const scrollHeight = 100;
    toTopButton.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        toTopButton.fadeIn();
      } else {
        toTopButton.fadeOut();
      }
    });
  });