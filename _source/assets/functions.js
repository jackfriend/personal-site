if (    $(window).width()    >     320) {

  $('.article').hover(function () {
    var articlePreviewHeight = $(this).find('.article-preview').height();
    $(this).find('.article-preview').show();
    $(this).find('.article-image').css({
      bottom: articlePreviewHeight
    });
  }, function () {
    $(this).find('.article-preview').hide();
    $(this).find('.article-image').css({
      bottom: '0'
    });
  });

}

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

$('.article-wrapper').masonry({
  itemSelector: '.article'
});

if (    $(window).width()    >     320) {
  $('.article-wrapper').masonry({
    itemSelector: '.article'
  });
} else {
  $('.article-wrapper').masonry('destroy');
};


$(window).resize(function () {

  if (    $(window).width()    >     320) {
    $('.article-wrapper').masonry({
      itemSelector: '.article'
    });
  } else {
    $('.article-wrapper').masonry('destroy');
  };

});
