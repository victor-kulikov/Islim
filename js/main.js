jQuery(document).ready(function() {

    // Меню бургер
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

$("#categories").click(function(){
    $("choice__list").css("opacity", 1);
});


$('.choice').click(function() {
        $(".choice__list").fadeToggle(100);
    });

//register
    $('.form-bg').on('click', function() {
        $('.form-bg, .pop-register').hide();
        $('body').css('overflow', 'auto');
    })


    $('body').on('click', '.register', function() {
        $('.form-bg, .pop-register').show();
        $('body').css('overflow', 'hidden');
    })


    window.onkeydown = function(event) {
        if (event.keyCode == 27) {
            $('.form-bg, .pop-register').hide();
            $('body').css('overflow', 'auto');
        }
    };

//register
$('.form-bg').on('click', function() {
        $('.form-bg, .pop-login').hide();
        $('body').css('overflow', 'auto');
    })


    $('body').on('click', '.login', function() {
        $('.form-bg, .pop-login').show();
        $('body').css('overflow', 'hidden');
    })


    window.onkeydown = function(event) {
        if (event.keyCode == 27) {
            $('.form-bg, .pop-login').hide();
            $('body').css('overflow', 'auto');
        }
    };

//register
    $('.form-bg').on('click', function() {
        $('.form-bg, .pop-thank').hide();
        $('body').css('overflow', 'auto');
    })


    $('body').on('click', '.thank', function() {
        $('.form-bg, .pop-thank').show();
        $('body').css('overflow', 'hidden');
    })


    window.onkeydown = function(event) {
        if (event.keyCode == 27) {
            $('.form-bg, .pop-thank').hide();
            $('body').css('overflow', 'auto');
        }
    };

//register
    $('.form-bg').on('click', function() {
        $('.form-bg, .pop-product').hide();
        $('body').css('overflow', 'auto');
    })


    $('body').on('click', '.product', function() {
        $('.form-bg, .pop-product').show();
        $('body').css('overflow', 'hidden');
    })


    window.onkeydown = function(event) {
        if (event.keyCode == 27) {
            $('.form-bg, .pop-product').hide();
            $('body').css('overflow', 'auto');
        }
    };


    //sliders
    $('.slider-banner').slick({
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false

    });


    $('.slider-technology').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: '<i class="fa fa-angle-right slick-next arrow" aria-hidden="true"></i>',
        dots: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        }, ]
    });


    $('.slider-goods').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: '<span class ="slider-goods__next">View more<i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        dots: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                arrows: true
            }
        }, ]
    });


    $('.slider-sneakers').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button type = "button" class = "slider-sneakers__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></ button>',
        nextArrow: '<button type = "button" class = "slider-sneakers__next"><i class="fa fa-angle-right" aria-hidden="true"></i></ button>',
        dots: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: false,
                centerMode: true,
                centerPadding: '75px',
                slidesToShow: 1
            }
        }, ]
    });

    $('.item').matchHeight();

});