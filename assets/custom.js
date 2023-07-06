jQuery(document).ready(function () {
    $('.top-seller-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/prev.svg"><path d="M24.8182 44L0 22.4995L25 1" stroke="#231F20" stroke-width="1.2"></path></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="30" height="30" viewBox="0 0 26 45" fill="none" xmlns="https://static.barilliance.com/img/common/next.svg"><path d="M1.18084 1L26 22.4995L1 44" stroke="#231F20" stroke-width="1.2"></path></svg></button>',
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
})