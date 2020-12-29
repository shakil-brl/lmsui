/* eslint-env es6 */
/* eslint-disable */
//Function expression to select elements
$(document).ready(function() {
    
    $('.menu-toggle').on('click',function(){
       $('.nav').toggleClass('showing');
       $('.nav ul').toggleClass('showing');
    });
    
    $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $('.next'),
      prevArrow: $('.prev'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
  ]
    });
    
    
    
    
    
            var menuIcon = document.getElementById("menu-icon");
            var slideoutMenu = document.getElementById("slideout-menu");
    
    var register = $('#slideout-menu');


    

            menuIcon.addEventListener('click', function() {
                // register is not visible
  if(register.css('opacity') === '0')
  {
    register.css({
      'opacity': '1'
    });
  }
  else
  {
    register.css({
      'opacity': '0'
    });
  }
                
//                else {
//                  
//                slideoutMenu.style.opacity = '0';
//                slideoutMenu.style.pointerEvents = 'auto';
//              }
            })
    
    
    
    
    
});



//SlideOut Menu
const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})


