$(function(){
  $(window).on('load scroll', function () {
    $('.scroll').each(function() {
      var scrollItem = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > scrollItem - windowHeight + 250) {
        $(this).addClass('scrollin');
      }
    });
  });
  $(window).on('load scroll', function () {
    $('.scroll-reverse').each(function() {
      var scrollItem = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > scrollItem - windowHeight + 250) {
        $(this).addClass('scroll-reversein');
      }
    });
  });
});