$(document).ready(function () {
    $('.team-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
            breakpoint: 992,
            settings: {
                fade: true,
            }
        }],

    });
    $('.text-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        mobileFirst: true,
        vertical: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
        
        }],

    })
})