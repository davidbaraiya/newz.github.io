
// navbar 
$(document).ready(function(){

    $('#menu-bar').click(function(){
        $('.navbar-nav').toggleClass('navbar-nav-active');
    });

    $('#search-icon').click(function(){
        $('#search').toggleClass('active-search');
    });

});

var swiper = new Swiper(".science-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

      breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

  });


  $('#menu-bar').click(function(){
    $('this').toggle('fa-times');
    $('.navbar-nav').toggle();
});