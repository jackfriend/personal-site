var insultArray = [
  'People like you are the reason we have middle fingers.',
  'Mirrors can’t talk, lucky for you they can’t laugh either.',
  'Why Don’t You Slip Into Something More Comfortable <i class="em em-wink"></i> Like A Coma?',
  'Tell me… Is being stupid a profession or are you just gifted?',
  'No need for insults, your face says it all.',
  'It’s not that you are weird… it’s just that everyone else is normal.',
  'You know most days when I look in a mirror I feel ugly, but when I look at you I feel lucky'
];

var replyArray = [
  'I\'m Sorry <i class="em em-sleepy"></i>',
  'Haha <i class="em em-stuck_out_tongue_closed_eyes"></i>',
  'No! Don\'t click me!'
]

var insult = insultArray[Math.floor(Math.random() * insultArray.length)];
var reply = replyArray[Math.floor(Math.random() * replyArray.length)];

$('.insult').append(insult);
$('.reply').append(reply);

if (    $(window).width()    < 600) {
  $('.insult').empty();
  $('.reply').empty();
};

$(window).resize(function () {

  if (    $(window).width()    <= 600) {
    $('.insult').empty();
    $('.reply').empty();
  } else {
    $('.insult').append(insult);
    $('.reply').append(reply);
  }

});
