$(document).ready(function(){

  //activate on window scroll//
  $(document).scroll(function(){
    console.log("window Scroll Top: " + $(window).scrollTop() );
    if ( $(document).scrollTop() < $('#about').offset().top ){
      $('nav a').removeClass('active');
    }
    //loop through each section//
    $('.section').each(function(){
        //if scroll top of window is greater than the section top position
        //grab the id of the current section and match it to the nav anchor//
        //Highlight the matching nav anchor//

        if($(document).scrollTop() >= (($(this).offset().top) - 40)){
          console.log("div offset top:" + $(this).offset().top );
          var id = $(this).attr('id');
          $('nav a').removeClass('active');
          $('nav a[href=\\#' + id + ']').addClass('active');
          }

      });
    });
  });
