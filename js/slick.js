
$(document).ready(function(){
    $('.main_slider').slick({
        infinite:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        appendArrows: $('.main_slide_arrow'),
        prevArrow:'<img src="img/prev_arrow.png" alt="">',
        nextArrow:'<img src="img/next_arrow.png" alt="">',
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '0px'
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
  $('.mobile_menu').click(function() {
    $('.header_top nav').toggleClass('active_menu');  
  })  
  });
      