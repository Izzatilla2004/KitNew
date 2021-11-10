let iElement = document.querySelectorAll(".application__input");
let maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
};
iElement.forEach(e => {
  let mask = new IMask(e, maskOptions);
});

function myFunction(x) {
  x.classList.toggle("change");
}


var slider1 = new Swiper('.sales-swiper', {
  loop: true,
  pagination: {
    el: '.sales-swiper__pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


var swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  /*  autoplay: {
     enabled: true,
     delay: 1,
   },
   speed: 1500, */
  clickable: true,
  breakpoints: {

    1200: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 0
    },
  }
});


$(".media-menu").on("click", function () {
  $('.media-sec').toggleClass('show');
});

