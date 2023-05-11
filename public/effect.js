$('.menu-nav').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:4
            
        },
        600:{
            items:6
        },
        1000:{
            items:6
        }
    }
})

$('.slide-logo').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplaySpeed:1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:3
            
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$('.slide-sanpham').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout: 5000,
    autoplaySpeed:2000,
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        1001:{
            items:4
        }
    }
})

$('.slide-saoviet').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 4000,
    autoplaySpeed:2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2
        },
        400:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

$(function(){ 
    var heightTop1 = $(window).height();

    $('.nut-menu').click(function(){
        $('.menu-fixed2').addClass('ra2');

        return false;
    })

    $('.dong').click(function(){
        $('.menu-fixed2').removeClass('ra2');

        return false;
    })

})