$(window).resize(function(){
    // function
    owl_dots_add_class();
    hygiene_owl_slider();
    un_artists_list();
    galerie_slider_owl ();
    owl_change_tab();
    klassisches_owl_slider();

});


$(document).ready(function(){
    //function
    hygiene_owl_slider();
    un_artists_list();
    galerie_slider_owl();
    klassisches_owl_slider();


    // WOW js
    new WOW().init();

    // toggle class
    $('.menu-toggle-btn').click(function(){
        $('.header-wrapper').toggleClass('mobile-open');
        $('html').toggleClass('cm-overflow');
    });

    // Contact icon js
    $('.mobile-contact-icon').click(function(){
        $('.contact-box-ul').toggleClass('contact-ic-open');
        $(this).toggleClass('active');
    });

    //Sub Menu Js
    $('.has-submenu').click(function () {
        if ($(window).width() <= 991) {
            $(".dropdown-submenu").addClass('inner-menu-open');
            $(".header-wrapper").addClass('inner-mobile-open');
        }
    });
    $('.inner-back-btn').click(function(){
        $(".dropdown-submenu").removeClass('inner-menu-open');
        $(".header-wrapper").removeClass('inner-mobile-open');
    });


    //Li Has Active Class Js
    $(".unsere-urlhash-ul li").click(function(){
        // If this isn't already active
        if (!$(this).hasClass("active")) {
            // Remove the class from anything that is active
            $(".unsere-urlhash-ul li.active").removeClass("active");
            // And make this active
            $(this).addClass("active");
        }
    });

    // Accordion Js
    $('.ct_accordion_lable').click(function(){

        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');
        $(this).toggleClass('ct_visiable');
         $(this).parents('.faq-col').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');

        $(this).siblings().find('.ct_accordion_info').slideUp();
        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_info').slideUp();
          $(this).parents('.faq-col').siblings().find('.ct_accordion_info').slideUp();

        $(this).parents('.ct_accordion_wrap').find('.ct_accordion_info').slideToggle();
    });

    //more text js
    $('.moreless-button').click(function() {
        $(this).parents('.main_more_text').find('.moretext').slideToggle();
        $(this).parents('.main_more_text').find('.slide_toggle_btn').fadeToggle('fast');

        $(this).parents('.owl-item').siblings().find('.moretext').slideUp('slow');
        $(this).parents('.main_more_text').siblings().find('.moretext').slideUp('slow');

        setTimeout(function(){ $('.owl-carousel').trigger('refresh.owl.carousel'); }, 470);


        if ($(this).find('span').text() == "weniger") {
            $(this).find('span').text("mehr dazu")
            $(this).find('svg').removeClass('angle_rotact');

        } else {
            $(this).find('span').text("weniger");
            $(this).find('svg').addClass('angle_rotact');
        }
    });




    //Unsere Leistungen Owl
    $('.unsere-leistungen-owl').owlCarousel({
        items:1,
        loop:false,
        center:true,
        dots:false,
        mouseDrag:false,
        touchDrag:false,
        margin:10,
        URLhashListener:true,
        startPosition: 'URLHash',
        smartSpeed: 750,
        responsive:{
            0:{
                loop:false,
                dots:true,
                autoHeight: true,
                nav: true,
                navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(2.707 2.06)\"> <g data-name=\"Group 14286\" transform=\"translate(46.434) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,0,13.267,21.891,29.188,0\" transform=\"translate(0 24.544)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,0,0,46.371\" transform=\"translate(13.248)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </g> </svg>",
                    "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(47.977 2.06) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,21.891,13.267,0,29.188,21.891\" transform=\"translate(0 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,46.371,0,0\" transform=\"translate(13.248 0.064)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </svg>"],
            },
            992:{
                items:1,
            },
        }
    });


    //Unsere-artists-owl
    $('.unsere-artists-owl').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        smartSpeed: 750,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(2.707 2.06)\"> <g data-name=\"Group 14286\" transform=\"translate(46.434) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,0,13.267,21.891,29.188,0\" transform=\"translate(0 24.544)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,0,0,46.371\" transform=\"translate(13.248)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </g> </svg>",
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(47.977 2.06) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,21.891,13.267,0,29.188,21.891\" transform=\"translate(0 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,46.371,0,0\" transform=\"translate(13.248 0.064)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </svg>"],
        responsive:{
            0:{
                items:1
            },
            575:{
                items:1
            },
        }
    })

    //Das-Sagen-owl
    $('.das-sagen-owl').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        nav:true,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(2.707 2.06)\"> <g data-name=\"Group 14286\" transform=\"translate(46.434) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,0,13.267,21.891,29.188,0\" transform=\"translate(0 24.544)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,0,0,46.371\" transform=\"translate(13.248)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </g> </svg>",
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(47.977 2.06) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,21.891,13.267,0,29.188,21.891\" transform=\"translate(0 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,46.371,0,0\" transform=\"translate(13.248 0.064)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </svg>"],
        responsive:{
            0:{
                items:1
            },
            575:{
                items:1
            },
        }
    })


    //Owl Function
    owl_dots_add_class();
    owl_change_tab();

});

//Owl Change Tab Js
function owl_change_tab() {
    var owl = $('.unsere-leistungen-owl.owl-carousel');
    owl.owlCarousel();
    owl.on('changed.owl.carousel', function (event) {

        var currentItem = event.item.index;

        $('.unsere-urlhash-ul ul li.tab_li').eq(currentItem).addClass('active').siblings().removeClass('active');
    })
}

//Owl Dots Active Class Js
function owl_dots_add_class() {
    $('.owl-dot.active').next().addClass('owl-dot-next');
    $('.owl-dot.active').prev().addClass('owl-dot-prev');

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    owl.on('changed.owl.carousel', function(event) {
        $('.owl-dot').removeClass('owl-dot-next');
        $('.owl-dot').removeClass('owl-dot-prev');
        $('.owl-dot.active').next().addClass('owl-dot-next');
        $('.owl-dot.active').prev().addClass('owl-dot-prev');


    });
}


//Hygiene-owl Slider
function hygiene_owl_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".hygiene-owl");

    if (checkWidth >= 1441) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 1440) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            dots: false,
            navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(2.707 2.06)\"> <g data-name=\"Group 14286\" transform=\"translate(46.434) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,0,13.267,21.891,29.188,0\" transform=\"translate(0 24.544)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,0,0,46.371\" transform=\"translate(13.248)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </g> </svg>",
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(47.977 2.06) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,21.891,13.267,0,29.188,21.891\" transform=\"translate(0 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,46.371,0,0\" transform=\"translate(13.248 0.064)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </svg>"],
            responsive:{
                0:{
                    items:1,
                    dots:true,
                    autoHeight: true,
                },
                576:{
                    items:2,
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
            }
        });
    }
}


//Un-artists-list-Slider
function un_artists_list() {
    var checkWidth = $(window).width();

    var owlPost = $(".un-artists-list-owl");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            dots: false,
            navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(2.707 2.06)\"> <g data-name=\"Group 14286\" transform=\"translate(46.434) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,0,13.267,21.891,29.188,0\" transform=\"translate(0 24.544)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,0,0,46.371\" transform=\"translate(13.248)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </g> </svg>",
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(47.977 2.06) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,21.891,13.267,0,29.188,21.891\" transform=\"translate(0 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,46.371,0,0\" transform=\"translate(13.248 0.064)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </svg>"],
            responsive:{
                0:{
                    items:1,
                    dots:true,
                    loop:false,
                    autoHeight: true,
                },
                450:{
                    items:2,
                },
                576:{
                    items:3,
                },
            }
        });
    }
}


//Galerie-Slider
function galerie_slider_owl () {
    var checkWidth = $(window).width();

    var owlPost = $(".galerie-owl");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            dots: false,
            navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(2.707 2.06)\"> <g data-name=\"Group 14286\" transform=\"translate(46.434) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,0,13.267,21.891,29.188,0\" transform=\"translate(0 24.544)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,0,0,46.371\" transform=\"translate(13.248)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </g> </svg>",
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(47.977 2.06) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,21.891,13.267,0,29.188,21.891\" transform=\"translate(0 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,46.371,0,0\" transform=\"translate(13.248 0.064)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </svg>"],
            responsive:{
                0:{
                    items:2,
                    dots:true,
                    loop:false,
                    autoHeight: true,
                },
                576:{
                    items:3,
                },
            }
        });
    }
}

//Klassisches Slider
function klassisches_owl_slider () {
    var checkWidth = $(window).width();

    var owlPost = $(".klassisches-owl");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            dots: false,
            navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(2.707 2.06)\"> <g data-name=\"Group 14286\" transform=\"translate(46.434) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,0,13.267,21.891,29.188,0\" transform=\"translate(0 24.544)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,0,0,46.371\" transform=\"translate(13.248)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </g> </svg>",
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.684\" height=\"33.343\" viewBox=\"0 0 50.684 33.343\"> <g transform=\"translate(47.977 2.06) rotate(90)\"> <path data-name=\"Path 13309\" d=\"M0,21.891,13.267,0,29.188,21.891\" transform=\"translate(0 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> <path data-name=\"Path 13310\" d=\"M1.346,46.371,0,0\" transform=\"translate(13.248 0.064)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/> </g> </svg>"],
            responsive:{
                0:{
                    items:1,
                    autoHeight: true,
                    dots:true,
                },
                576:{
                    items:1,
                    dots:true,
                },
            }
        });
    }
}



