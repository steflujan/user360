$(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) { 
          $(".navbar-fixed-top").css("background-color", "#2A3541"); 
        } else {
          $(".navbar-fixed-top").css("background-color", "transparent"); 
        }
      });
    });