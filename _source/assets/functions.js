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

};

var insultArray = [
  'People like you are the reason we have middle fingers.',
  'Mirrors can’t talk, lucky for you they can’t laugh either.',
  'Why Don\'t You Slip Into Something More Comfortable <i class="em em-wink"></i> Like A Coma?',
  'Tell me… Is being stupid a profession or are you just gifted?',
  'No need for insults, your face says it all.',
  'It’s not that you are weird… it’s just that everyone else is normal.',
  'You know most days when I look in a mirror I feel ugly, but when I look at you I feel lucky'
];

var insult = insultArray[Math.floor(Math.random() * insultArray.length)];
$('.insult').append(insult);

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
