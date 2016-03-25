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
