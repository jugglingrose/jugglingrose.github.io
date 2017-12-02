//needs to be corrected //
$(document).ready(function(){
  var menuVisible = false;

  $('#iconMenu').click(function(){
    console.log("icon menu click activated");
    if(menuVisible === true){
      $('#dropdownMenu').css({'display': 'none'});
      menuVisible === false;
      return;
    }
    $('#dropdownMenu').css({'display': 'block'});
    menuVisible === true;
    return;
  });
});
