(function () {
    $(document).ready(function () {
        return $('.collection-product-slider').slick({
            dots: !1,
            infinite: !0,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:'<button type="button" class="slick-prev"><svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.12302 0.999919L18 15.1666L1 29.3333" stroke="black" stroke-width="1.1"></path></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.12302 0.999919L18 15.1666L1 29.3333" stroke="black" stroke-width="1.1"></path></svg></button>'            
        });  
    });
    return;      
}).call(this);
  

$(document).ready(function () {
 var previous_grid=getCookie();

  if(previous_grid=="grid3"){
    $('.display__4__items').removeClass('display__active');
    $('.display__3__items').addClass('display__active');
    $('.collection-grid__wrapper').find('.collection__grid').addClass('collection__grid--3');
  }
  // console.log("griddata: "+previous_grid);
    $('.grid-display-type').on('click', 'a' ,function(){
        $(this).addClass('display__active').siblings().removeClass('display__active');
        if($('.display__3__items.display__active').length > 0){
          setCookie("grid3");
          $(this).closest('.collection-grid__wrapper').find('.collection__grid').addClass('collection__grid--3');
        } else {
           setCookie("grid4");
          $(this).closest('.collection-grid__wrapper').find('.collection__grid').removeClass('collection__grid--3');
        }
        $('.collection-product-slider').slick('refresh');
    });

  // cookie-function
  function setCookie(cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = "gridtype" + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie() {
  let name = "gridtype" + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

    // cookie-function



  
    $('.filter-option-title').click(function (e) {
        $(this).toggleClass('filter-active')
        $(this).next().slideToggle(500)
        e.stopPropagation();
    })    

    
    $('.quick-add-button').click(function () {  
        $(this).closest('.product-collection-image__carousel').find('.attribute-options').toggleClass('active--attribute-options');
    })

    $('.filter-mobile-title').click(function () {  
        $('.filter-sidebar').addClass('filter-active')
    })

    $('.filter-sidebar .drawer__close-button').click(function () {  
        $('.filter-sidebar').removeClass('filter-active')
    })

})


const viewMore = document.getElementById("view-more-atf");
const atf = document.getElementById('above-the-fold');
if(viewMore !== null){
 viewMore.onclick = function () {
    viewMore.classList.toggle('show-content')
    atf.classList.toggle('show-content')

    if (viewMore.className == 'view-more show-content') {
        viewMore.innerHTML = "Read Less"
    } else {
        viewMore.innerHTML = "Read More"
    }
  }
 }
// sort dropdown bottom
 
function sortDropdownBottom() {
  // alert("hey");
    // document.getElementByClass("sort-options-dropdown-bottom").classList.toggle("show");
  $(".sort-options-dropdown-bottom").toggleClass("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.sort-options-dropdown-title-bottom')) {
        var dropdownsBottom = document.getElementsByClassName("sort-options-dropdown-bottom");
        var iBottom;
        for (iBottom = 0; iBottom < dropdownsBottom.length; iBottom++) {
        var openDropdownBottom = dropdownsBottom[iBottom];
            if (openDropdownBottom.classList.contains('show')) {
                openDropdownBottom.classList.remove('show');
            }
        }
    }
}

// sort dropdown top
 
function sortDropdown() {
    document.getElementById("sort-options-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.sort-options-dropdown-title')) {
        var dropdowns = document.getElementsByClassName("sort-options-dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Variants - Swatches
const getProductById = async(handle) => {
	 let productData = await fetch(`/products/${handle}.js`).then(response => response.json());
    return await productData.variants;
}
const filter = (currentSlider, optionAlt) => {
  currentSlider.slick('slickUnfilter');
  currentSlider.slick('slickFilter', `.${optionAlt}`);
};
const variantATC = (self, variantId) => {
  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data: {
    quantity: 1,
    id: variantId
    },
    dataType: 'json', 
    success: function (data, textStatus, xhr) { 
      self.find('.product-actions-container .added-to-cart-notice').addClass('active-note');
      self.find('.product-actions-container .added-to-cart-notice').text('added to bag');
    },
    complete: async function (xhr, textStatus) {
      if(xhr.status == 200){
        let cartRes = await fetch(window.location.href);
        cartRes = await cartRes.text();
        let parser = new DOMParser();
        let doc = parser.parseFromString(cartRes, 'text/html');
        let countUpdate = doc.querySelector('.header__icon--cart').innerHTML;
        document.querySelector('.header__icon--cart').innerHTML = countUpdate;
        let drawerUpdate = doc.querySelector('cart-drawer').innerHTML;
        document.querySelector('cart-drawer').classList.remove("is-empty");
        document.querySelector('cart-drawer').innerHTML = drawerUpdate;
        await document.querySelector('.header__icon--cart').click();
      } else {
        self.find('.product-actions-container .added-to-cart-notice').text('sold out');
        self.find('.product-actions-container .added-to-cart-notice').addClass('active-note');
      }
    }
  });
}
$('.collection__grid .product__content').each(function(){
    let pc = $(this);
    let pcColor = pc.find('.attribute-options .attribute-options__wrapper.colour a');
    let pcSize = pc.find('.attribute-options .attribute-options__wrapper.size a');
    let selfSlider = pc.find('.collection-product-slider');
    let selectedColor = pcColor .length > 0 ? pcColor.eq(0).attr('data-option-value') : "";
    let selectedSize ="";
    if(pcColor.length > 0){
      pcColor.eq(0).addClass('active');
      if(pcColor.length > 1){
        let optionAlt = 'color_'+selectedColor.toLowerCase().replace(/ /g,'-');
        setTimeout(()=>{ filter(selfSlider, optionAlt); },200);
        pcColor.each(function(){
          let thisClick = $(this);
          thisClick.click(function(){
              pcColor.removeClass('active');
              $(this).addClass('active');
              selectedColor = $(this).attr("data-option-value");
              optionAlt = 'color_'+selectedColor.toLowerCase().replace(/ /g,'-');
              filter(selfSlider, optionAlt);
          });
        });
      }
    }
    
    pcSize.each(function(){
        let thisClick = $(this);
        thisClick.click(async function(){
            // pcSize.removeClass('active');
            // $(this).addClass('active');
            selectedSize = $(this).attr("data-option-value");
            const selectedOption = pcColor.length > 0 ? selectedColor +" / "+selectedSize : selectedSize ;
            const selectedHandle=$(this).attr("data-product-handle");
            const variantJSON = await getProductById(selectedHandle);
            const selectedVariantId = variantJSON.filter(variant => variant.title === selectedOption).map(variant => variant.id);
            await variantATC(pc, selectedVariantId);
            setTimeout(()=>{
              pc.find('.product-actions-container .added-to-cart-notice').removeClass('active-note');
            },3000);
        });
    });
});




