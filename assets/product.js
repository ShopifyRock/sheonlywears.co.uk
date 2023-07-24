 // Remove active class from all thumbnail slides
 $('.product-thumb .slick-slide').removeClass('slick-active');

 // Set active class to first thumbnail slides
 $('.product-thumb .slick-slide').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.product-main-image').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
     var mySlideNumber = nextSlide;
     $('.product-thumb .slick-slide').removeClass('slick-active');
     $('.product-thumb .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });
 $('label.Color-swatch').click(function() {
   var color_size = $('.product-form__input input[type=radio]:checked+label.Color-swatch').attr('color-size');
   $('.product-thumb').slick('slickUnfilter');
   $('.product-main-image').slick('slickUnfilter');
     var color = $(this).attr('data-value');
    // alert(color);
     var color_calss = '.color_' + color;
// alert(color_size);
   if(color_size > 1){
       $(".product-thumb").slick('slickFilter', color_calss);
       $('.product-thumb').slick('resize');
       $(".product-main-image").slick('slickFilter', color_calss);
       $('.product-main-image').slick('resize');
   }
 });  
$(document).ready(function() {
var color = $('.product-form__input input[type=radio]:checked+label.enable-filter.Color-swatch').attr('data-value');
var color_size = $('.product-form__input input[type=radio]:checked+label.Color-swatch').attr('color-size');
var color_calss = '.color_' + color;
// alert(color_size);
if(color_size > 1){
$('.product-thumb').slick('slickUnfilter');
 $('.product-main-image').slick('slickUnfilter');
 $(".product-thumb").slick('slickFilter', color_calss);
 $('.product-thumb').slick('resize');
 $(".product-main-image").slick('slickFilter', color_calss);
 $('.product-main-image').slick('resize');
}
});
// PDP accordion

const items = document.querySelectorAll(".pdp-accordion button");
function toggleAccordion() {
 const itemToggle = this.getAttribute('aria-expanded');
 for (i = 0; i < items.length; i++) {
   items[i].setAttribute('aria-expanded', 'false');
 }
 if (itemToggle == 'false') {
   this.setAttribute('aria-expanded', 'true');
 }
}
items.forEach(item => item.addEventListener('click', toggleAccordion));

// pdp zoom

function zoom(e){
       var zoomer = e.currentTarget;
       e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
       e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
       x = offsetX/zoomer.offsetWidth*100
       y = offsetY/zoomer.offsetHeight*100
       zoomer.style.backgroundPosition = x + '% ' + y + '%';
     }