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
