'use strict'

$(document).ready(function(){

  //activate on window scroll//
  $(document).scroll(function(){
    console.log( "document scroll top is:" + $(document).scrollTop() );
    // if document is in hero landing, remove active from all anchor tags//
    if ( $(document).scrollTop() < $('#about').offset().top ){
      $('nav ul li a').removeClass('active');
    }

    else if ( $(window).scrollTop() + $(window).height() === $(document).height() ){
        console.log('bottom');
        $('nav ul li a').removeClass('active');
        $('nav ul li a[href=\\#contact]').addClass('active');
    }

    else{

    //loop through each section//
    $('.section').each(function(){
        //if scroll top of window is greater than the section top position
        //grab the id of the current section and match it to the nav anchor//
        //Highlight the matching nav anchor//

        if($(document).scrollTop() >= (($(this).offset().top) - 40)){
          var id = $(this).attr('id');
          $('nav ul li a').removeClass('active');
          $('nav ul li a[href=\\#' + id + ']').addClass('active');
          }
        });
      }
      });
    });


/*  else if ( $(window).scrollTop() + $(window).height() === $(document).height() ){
    alert('bottom');
    $('nav ul li a').removeClass('active');
    $('nav ul li a[href=\\#contact]').addClass('active');
  }*/
