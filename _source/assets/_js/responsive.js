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
