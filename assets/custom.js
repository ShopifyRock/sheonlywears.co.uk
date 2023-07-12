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

    // Mobile menu

    $('.mobile-header .nav-toggle').click(function () {
        $(this).toggleClass('nav-toggle-active')
        $('html').toggleClass('mobile-menu--active')
        $('.mobile-nav').toggleClass('mobile-menu-active')
        if ($('.mobile-nav .navigation>ul>li').hasClass('hassubmenu')){
            $('.mobile-nav .navigation>ul>li.hassubmenu').prepend('<span class="mobile-nav-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.35064 1L1 1.35064L5.95873 6.30937L1.00075 11.2673L1.35138 11.618L6.66 6.30937L1.35064 1Z" fill="black" stroke="black"></path></svg></span>');
        }
    })

    $('.mobile-nav .navigation > ul > li').click(function () {
        $(this).children().addClass('submenu--active')
    })


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

