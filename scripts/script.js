$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      if($(this).scrollTop() > 0) { 
          $('#scroll-sticky').addClass('nav-transition');
      } else {
          $('#scroll-sticky').removeClass('nav-transition');
      }
    });
});