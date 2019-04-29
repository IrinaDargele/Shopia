
$(document).ready(function() {

    $('.slider').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        speed: 500,
    });

    $('.menu-trigger').on("click", function() {
        $('.header_nav').stop(true).slideToggle('slow', function(){
            if($('.header_nav').is(':hidden')){
                $('.header_nav').removeAttr('style');
            }
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});