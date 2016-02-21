$('.article-wrapper').masonry({
  itemSelector: '.article'
});

if (    $(window).width()    <=     320) {
  $('.article-wrapper').masonry('destroy');
}
