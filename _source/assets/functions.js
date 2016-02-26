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

$('.nav-container').on('click', '.fa-bars',function () {
  $('.nav-container').removeClass('unclicked');
  $('.nav-container').addClass('clicked');
  $('.nav-menu').show();
  $('.social-media').show();
  $('.fa-bars').addClass('fa-times');
  $('.fa-bars').removeClass('fa-bars');
});

$('.nav-container').on('click', '.fa-times',function () {
  $('.nav-menu').fadeOut(3000);
  $('.social-media').fadeOut(3000);
  $('.nav-container').removeClass('clicked');
  $('.nav-container').addClass('unclicked');
  $('.fa-times').addClass('fa-bars');
  $('.fa-times').removeClass('fa-times');
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
