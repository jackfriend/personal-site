$('.nav-menu li').hover(function () {
  $(this).prepend('<span class="fa fa-hand-o-right bounce"></span>&nbsp');
}, function () {
  $(this).find('.bounce').remove();
});

$('.article-wrapper').masonry({
  itemSelector: '.article'
});

