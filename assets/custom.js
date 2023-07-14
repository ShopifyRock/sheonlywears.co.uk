jQuery(document).ready(function () {
    $('.top-seller-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" aria-label="Previous arrow" class="slick-prev"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/prev.svg"><path d="M24.8182 44L0 22.4995L25 1" stroke="#231F20" stroke-width="1.2"></path></svg></button>',
        nextArrow: '<button type="button" aria-label="next arrow" class="slick-next"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/next.svg"><path d="M1.18084 1L26 22.4995L1 44" stroke="#231F20" stroke-width="1.2"></path></svg></button>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }    
        ]
    });

    // Banner promotion carousel
    $('.banner-promotion__wrapper').slick({
        dots: !1,
        arrows: !1,
        autoplay: !0,
        infinite: !0,
        autoplaySpeed: 0,
        speed: 5e3,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        swipeToSlide: !0,
        mobileFirst: !0,
        draggable: !0,
        responsive: [{
            breakpoint: 767,
            settings: "unslick"
        }]
    })


    // Header Account dropdown

    $('.account-header').click(function() { 
        $(this).next('.account-dropdown').slideToggle();
    });
        
    $(document).click(function(e) { 
        var target = e.target; 
        if (!$(target).is('.account-header') && !$(target).parents().is('.account-header')) 
        { $('.account-dropdown').slideUp(); }
    });


    // Header search 
    
    $('.search-header').click(function() { 
        $('.search-dropdown').addClass('search--active');
    });
    $('.search-close').click(function() { 
        $('.search-dropdown').removeClass('search--active');
    });

   

    


    $('.product-main-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/prev.svg"><path d="M24.8182 44L0 22.4995L25 1" stroke="#231F20" stroke-width="1.2"></path></svg></div>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/next.svg"><path d="M1.18084 1L26 22.4995L1 44" stroke="#231F20" stroke-width="1.2"></path></svg></div>',
        fade: false,        
        asNavFor: '.product-thumb',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }   
          ]
    });
    $('.product-thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-main-image',
        dots: false,        
        focusOnSelect: true,
        vertical:true,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/prev.svg"><path d="M24.8182 44L0 22.4995L25 1" stroke="#231F20" stroke-width="1.2"></path></svg></div>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/next.svg"><path d="M1.18084 1L26 22.4995L1 44" stroke="#231F20" stroke-width="1.2"></path></svg></div>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }   
          ]
    });   


    // PDP carousel
    $('.upsell-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" aria-label="Previous arrow" class="slick-prev"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/prev.svg"><path d="M24.8182 44L0 22.4995L25 1" stroke="#231F20" stroke-width="1.2"></path></svg></button>',
        nextArrow: '<button type="button" aria-label="next arrow" class="slick-next"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/next.svg"><path d="M1.18084 1L26 22.4995L1 44" stroke="#231F20" stroke-width="1.2"></path></svg></button>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }    
        ]
    });    

    $('.shop-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" aria-label="Previous arrow" class="slick-prev"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/prev.svg"><path d="M24.8182 44L0 22.4995L25 1" stroke="#231F20" stroke-width="1.2"></path></svg></button>',
        nextArrow: '<button type="button" aria-label="next arrow" class="slick-next"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/next.svg"><path d="M1.18084 1L26 22.4995L1 44" stroke="#231F20" stroke-width="1.2"></path></svg></button>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }    
        ]
    });    

    // PDP tabs

    $('ul.tabs').each(function(){
        var $active, $content, $links = $(this).find('a');
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        $(this).on('click', 'a', function(e){
            $active.removeClass('active');
            $content.hide();

            $active = $(this);
            $content = $(this.hash);

            $active.addClass('active');
            $content.fadeIn(500);
            e.preventDefault();
            $('.upsell-carousel').slick('refresh');
            $('.shop-carousel').slick('refresh');
        });
    });

})

 // Mobile menu

$(function() {
    var mobilenavigation = $('.mobile-nav').mobilenavigation()			
    mobilenavigation.on('closing', function() {})
    
    $('.mobile-nav-overlay').on('click', function() {
        mobilenavigation.close()
    })
    $('.nav-close').on('click', function() {
        mobilenavigation.close()
    })
    
    $('.nav-toggle').on('click', function() {
        mobilenavigation.open()
    })
})