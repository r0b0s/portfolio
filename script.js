// Add your custom JavaScript here
$(document).ready(function () {
    // Smooth scrolling using jQuery
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1000);
    });

    // Activate Scrollspy
    $('body').scrollspy({
        target: '#navbarNav',
        offset: 100
    });

    // Parallax scrolling effect for the header
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        $('.bg-primary').css('background-position-y', -scrolled * 0.3 + 'px');
    });
});
