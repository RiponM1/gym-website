$('.back_top p').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
});

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 50) {
        $('.back_top p').fadeIn(500);
    } else {
        $('.back_top p').fadeOut(500);
    }
});