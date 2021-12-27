
// navbar 
$(document).ready(function(){
  $(window).on('load', function(){ 
    $('#status').fadeOut(); 
    $('#preloader').delay(350).fadeOut('slow'); 
    $('body').delay(350).css({'overflow':'visible'});
  })

    $('#menu-bar').click(function(){
      $(this).toggleClass('fa-times');
        $('.navbar-nav').toggleClass('navbar-nav-active');
    });

    $('#search-icon').click(function(){
        $('#search').toggleClass('active-search');
    });

    $('.nav-item a').click(function(){
        $('.navbar-nav').css({'display' : 'none'});
        $('#menu-bar').removeClass('fa-times');
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