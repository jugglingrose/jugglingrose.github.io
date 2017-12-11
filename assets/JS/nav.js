'use strict'

/* When scrollTop === 0, set nav bar to white for media query < 760 width and
set nav bar to transparent for media query > 760 width */
$(document).ready(function(){
  if( $(document).scrollTop() === 0 && $(document).width() >= 760){
    console.log("document should have transparent nav");
    $('nav').removeClass('whiteNav');
    $('nav').addClass('transparentNav');
  } else if( $(document).scrollTop() === 0 && $(document).width() < 760){
    console.log("doc should have white nav");
    $('nav').removeClass('transparentNav');
    $('nav').addClass('whiteNav');
  } else{
    $('nav').removeClass('transparentNav');
    $('nav').addClass('whiteNav');
  }


  /*on page scroll, set nav bar to white when width > 760 && once user has
  scrolled beyond the hero landing*/
  
  //activate on window scroll//
  $(document).scroll(function(){
    if( $(document).width() < 760){
      $('nav').removeClass('transparentNav');
      $('nav').addClass('whiteNav');
    }
    else if( $(document).width() > 760){
      if ( $(document).scrollTop() < $('#about').offset().top ){
        $('nav').removeClass('whiteNav');
        $('nav').addClass('transparentNav');
      }
      else if ( $(document).scrollTop() > $('#about').offset().top){
        $('nav').removeClass('transparentNav');
        $('nav').addClass('whiteNav');
      }
    }
  });
});
