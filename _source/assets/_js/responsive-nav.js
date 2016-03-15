if (    $(window).width()    <= 600) {
  $('.nav-menu').hide();
  $('.social-media').hide();
  $('.bounce').hide();
};

$(window).resize(function () {

  if (    $(window).width()    <= 600) {
    $('.nav-menu').hide();
    $('.social-media').hide();
    $('.bounce').hide();
  } else {
    $('.nav-menu').show();
    $('.social-media').show();
    $('.bounce').show();
  }

});

$('.nav-container').on('click', '.ion-navicon-round', function () {
  $('.nav-container').removeClass('unclicked');
  $('.nav-container').addClass('clicked');
  $('.nav-menu').show();
  $('.social-media').show();
  $('.ion-navicon-round').addClass('ion-close-round');
  $('.ion-navicon-round').removeClass('ion-navicon-round');
});

$('.nav-container').on('click', '.ion-close-round', function () {
  $('.nav-menu').fadeOut(3000);
  $('.social-media').fadeOut(3000);
  $('.nav-container').removeClass('clicked');
  $('.nav-container').addClass('unclicked');
  $('.ion-close-round').addClass('ion-navicon-round');
  $('.ion-close-round').removeClass('ion-close-round');
});
