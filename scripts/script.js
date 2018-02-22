$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > document.documentElement.clientHeight * .95) { 
              $('#scroll-sticky').addClass('nav-transition');
          } else {
              $('#scroll-sticky').removeClass('nav-transition');
          }
        });
});