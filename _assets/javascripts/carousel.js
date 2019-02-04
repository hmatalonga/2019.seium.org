$(document).ready(function () {

  $('.partners-carousel').slick({
    autoplay: true,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 778,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
    ]
  });

  var today    = new Date();
  var firstDay = 4;

  weekday = today.getDate() > firstDay ? today.getDay() : 0;

  var slickOpts = {
    initialSlide: weekday,
    dots: true,
    autoplay: false,
    infinite: false,
    slidesToShow: 2,
    responsive: [{
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        arrows: true,
        dots: false
      }
    }
    ]
  };


  $('.agenda-carousel').slick(slickOpts);


});
