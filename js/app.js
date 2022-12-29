
/*  Слайдер  */
$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinity: true,
        speed: 1000,
        easing: 'ease',
        autoplay: true,
        //centerMode: true,
        centerPadding: 0,
        //variableWidth:true,
        asNavFor:'.sliderbig',

    });
    $('.sliderbig').slick({
        arrows: false,
        fade: true,
        slidesToSow:3,
        asNavFor:'.slider'

});

});




