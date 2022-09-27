var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


  $('#sponsor-carousel').carousel({
    interval: 3000,
    cycle: true
  }); 

  // SLIDER-SPONSOR
  $('.logos-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
    breakpoint: 768,
    settings: {
    slidesToShow: 3
    }
    }, {
    breakpoint: 520,
    settings: {
    slidesToShow: 2
    }
    }]
    });
  