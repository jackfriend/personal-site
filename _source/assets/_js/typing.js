$('.typing-space').typed({
    strings: [
        '^1000 my name is jack friend',
        '^1000 i\'m an amateur web developer and programmer',
        '^1000 i\'m a HUGE lizard lover!',
        '^1000 and...',
        '^1000 I\'m looking for new clients to build websites for!',
        '^1000 <a href="contact.html">Click here for contact info</a>'
    ],
    showCursor: true,
    cursorChar: '|',
    speed: 15,
    backSpeed: 25,
    backDelay: 1000
});

if ($(window).width() < 800) {
    alert('Your screen is too small to use the About page. The page redirected to contact.html')
    window.location.replace('contact.html');
}
