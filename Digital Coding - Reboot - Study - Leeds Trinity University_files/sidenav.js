function openNav() {
    document.getElementById("mySidenav").style.width = "28.75rem";
    document.getElementById("ltucontainer").style.marginLeft = "28.75rem";
    document.body.style.backgroundColor = "white";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("ltucontainer").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }



  $("<span class='openoption'><i class='open fas fa-plus'></i></span>").insertBefore( "ul.multilevel-linkul-0" );
  $("<span class='closeoption'><i class='close fas fa-minus'></i></span>").insertBefore( "ul.multilevel-linkul-0" );
  
  $('.open').click(function(){
      $(this).parent().parent().addClass('show');
      $(this).parent().parent().removeClass('hide');
  });
  $('.close').click(function(){
      $(this).parent().parent().addClass('hide');
      $(this).parent().parent().removeClass('show');
      //$(this).parent().parent().removeClass('show');
      //$(this).parent().parent().removeClass('hide');
  });