// Variables
const __kpWishlistIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>';
const __kpWishlistFilledIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>';
const __kpCustomerLoggedIn = __st.cid;
const __kpWishlistBtnAll = document.querySelectorAll("a.kp-wishlist_btn");
let __kpWishlistLocalJson = JSON.parse(localStorage.getItem("__kpWishlistLocalJson"));

// Functions Declare

const __kpInitPageLoad = async() => {
  __kpCheckWishlist();
  __kpGetWIshlistData();
}

const __kpGetProductById = async(handle) => {
	return await fetch(`/products/${handle}.js`).then(response => response.json());
}

const __kpInsertItemHtml = async(itemHandle) => {
  const item = await __kpGetProductById(itemHandle);
  // console.log(item);
  let variant_options = "";
  item.variants.map((variant) => {
    variant_options += `<option value="${variant.id}">${variant.title}</option>`;
  });
  const __kpWishlistItemHtml =
    `<li class="item-list">
        <div class="item-image">
          <img src="${item.featured_image}" alt="${item.title}" width="280" height="420" />
        </div>
        <div class="item-info">
          <h4 class="item-title h4"><a class="item-title-link" href="${item.url}">${item.title}</a></h4>
          <p class="item-price">${__kpMoneyFormate(item.price)}</p>
          <div class="varinat-selector">
            <select class="">
              <option value="">select option</option>
              ${variant_options}
            </select>
          </div>
          <div class="add-to-cart">
            <button type="submit" name="add" class="product-form__submit button button--full-width button--secondary" var_id="${item.variants[0].id}"
            ${item.variants[0].available?"":"disabled"}
            >
            <span>
              ${item.variants[0].available?"ADD TO BAG":"SOLD OUT"}
            </span>
            <div class="loading-overlay__spinner hidden">
                <svg aria-hidden="true" focusable="false" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
            </button>
          </div>
          <a href="javascript:void(0);" class="kp-wishlist-remove" data-product-handle="${item.handle}">Remove</a>
        </div>
    </li>`;
    if(document.getElementById("kp-items_list") !== null ){
  document.getElementById("kp-items_list").insertAdjacentHTML("afterbegin", __kpWishlistItemHtml);
    }
}
const __kpGetWIshlistData = async() => {
  if (__kpWishlistLocalJson !== null && __kpWishlistLocalJson.length > 0) {
    if(document.getElementById("kp-items_list") !== null ){
    document.getElementById("kp-items_list").innerHTML = "";
    }
    __kpWishlistLocalJson.forEach( (item) => {
        __kpInsertItemHtml(item.product_handle);
    });
    setTimeout(()=>{
      __kpAddToCartFromWishlist();
      __kpRemoveFromWishlistByLink();
    },1000);
  } else {
    if(document.getElementById("kp-items_list") !== null){
    document.getElementById("kp-items_list").innerHTML = `<li class="empty-wishlist">There is no item in wishlist</li>`;
    }
  }
}
const __kpCheckWishlist = () => {
  if(__kpWishlistLocalJson !== null) {
      // __kpGetWIshlistData();
    document.querySelector("#kp-wishlist_icon .kp-wishlist_count").textContent = __kpWishlistLocalJson.length;
    if(__kpWishlistBtnAll !== null){
      __kpWishlistBtnAll.forEach(function(__kpWishlistBtn) {
        const __kpProductHandle = __kpWishlistBtn.dataset.productHandle;
        const __kpExistValue = __kpWishlistLocalJson.some(k => k.product_handle === __kpProductHandle);
        if(__kpExistValue) {
          __kpWishlistBtn.classList.add("added");
          __kpWishlistBtn.innerHTML = __kpWishlistFilledIcon;
        } else {
          __kpWishlistBtn.classList.remove("added");
          __kpWishlistBtn.innerHTML = __kpWishlistIcon;
        }
      });
    }
  }
}

const __kpWishlistCountIncrement = () => {
  let __rtWishlistCount = parseInt(document.querySelector("#kp-wishlist_icon .kp-wishlist_count").textContent);
  document.querySelector("#kp-wishlist_icon .kp-wishlist_count").textContent = ++__rtWishlistCount;
}

const __kpWishlistCountDecrement = () => {
  let __rtWishlistCount = parseInt(document.querySelector("#kp-wishlist_icon .kp-wishlist_count").textContent);
  document.querySelector("#kp-wishlist_icon .kp-wishlist_count").textContent = --__rtWishlistCount;
}

const __kpAddToWishlist = (self, __kpWishlistItemData) => {
  self.classList.add("adding");
  __kpWishlistLocalJson.unshift(__kpWishlistItemData);
  localStorage.setItem("__kpWishlistLocalJson", JSON.stringify(__kpWishlistLocalJson));
  __kpGetWIshlistData();  
    self.classList.remove("adding");
    self.classList.add("added");
    self.innerHTML = __kpWishlistFilledIcon;
    __kpWishlistCountIncrement(); 
}
const __kpRemoveFromWishlist = (self, __kpIndexItem) => {
  if(__kpIndexItem > -1) {
    self.classList.add("adding");
    __kpWishlistLocalJson.splice(__kpIndexItem, 1);
    localStorage.setItem("__kpWishlistLocalJson", JSON.stringify(__kpWishlistLocalJson));
    __kpGetWIshlistData();    
      self.classList.remove("adding");
      self.classList.remove("added");
      self.innerHTML = __kpWishlistIcon;
      __kpWishlistCountDecrement();   
  }
}
const __kpRemoveFromWishlistByLink = () => {
  if(__kpWishlistLocalJson !== null) {
    document.querySelectorAll("#kp-items_list li.item-list").forEach((__kpWishlistItem) => {
      __kpWishlistItem.querySelector('.kp-wishlist-remove').addEventListener("click", function() {
        const self = this;
        const __kpProductHandle = self.dataset.productHandle;
        const __kpIndexItem = __kpWishlistLocalJson.findIndex(k => k.product_handle === __kpProductHandle);
        if(__kpIndexItem > -1) {
          __kpWishlistLocalJson.splice(__kpIndexItem, 1);
          localStorage.setItem("__kpWishlistLocalJson", JSON.stringify(__kpWishlistLocalJson));
          __kpWishlistItem.remove();
          __kpWishlistCountDecrement();
          __kpCheckWishlist();
          if(document.querySelectorAll("#kp-items_list li.item-list").length < 1){
            document.getElementById("kp-items_list").innerHTML = `<li class="empty-wishlist">There is no item in wishlist</li>`;
          }
          setTimeout(()=>{
            __kpRemoveFromWishlistByLink();
          },1000);
        }
      });
    });
  }
}
const __kpAddToCartFromWishlist = () => {
  const itemList =document.querySelectorAll('#kp-items_list li.item-list' );
  itemList.forEach((option, index) => {
  const selectVariant = option.querySelectorAll(".varinat-selector select");
  const atcBtn = option.querySelector(".add-to-cart button");
  selectVariant.forEach((option, index) => {
    option.addEventListener("change", () => {
      const selectedValue = option.options[option.selectedIndex].value;
      atcBtn.addEventListener("click", async () => {
        let addCart = await fetch("/cart/add.js",{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ quantity: 1, id: selectedValue })
        });
          addCart = await addCart.json();
          atcBtn.querySelector(".loading-overlay__spinner").classList.remove("hidden");
          atcBtn.querySelector("span").classList.add("hidden");
          let cartRes = await fetch(window.location.href);
          cartRes = await cartRes.text();
          let parser = new DOMParser();
          let doc = parser.parseFromString(cartRes, 'text/html');
          let countUpdate = doc.querySelector('.header__icon--cart').innerHTML;
          document.querySelector('.header__icon--cart').innerHTML = countUpdate;
          atcBtn.querySelector(".loading-overlay__spinner").classList.add("hidden");
          atcBtn.querySelector("span").classList.remove("hidden");
          let newdata1 = doc.querySelector('cart-drawer').innerHTML;
          document.querySelector('cart-drawer').classList.remove("is-empty");
          document.querySelector('cart-drawer').innerHTML = newdata1;   
          await document.querySelector('.header__icon--cart').click();
          // console.log(newdata1);
        })
      });
    });
  });
}
const __kpMoneyFormate = (price) => {
    return __kpWishlist.money_format.replace("\{\{amount_no_decimals\}\}", price/100);
}

// Function Call
__kpInitPageLoad();

//click
document.getElementById("kp-wishlist_icon").addEventListener("click", function() {
  location.href = '/pages/wishlist';
});


  //click on add to wishlist button
if(__kpWishlistBtnAll !== null){
__kpWishlistBtnAll.forEach((__kpWishlistBtn) => {
    __kpWishlistBtn.addEventListener("click", function() {
      const self = this;
      const __kpProductHandle = self.dataset.productHandle;
      const __kpWishlistItemData = JSON.parse(`{
          "product_handle": "${__kpProductHandle}"
      }`);

      if(__kpWishlistLocalJson !== null) {
        const __kpExistValue = __kpWishlistLocalJson.some(k => k.product_handle === __kpProductHandle);
        const __kpIndexItem = __kpWishlistLocalJson.findIndex(k => k.product_handle === __kpProductHandle);
        if(__kpExistValue) {
          __kpRemoveFromWishlist(self, __kpIndexItem);
        }else {
          __kpAddToWishlist(self, __kpWishlistItemData);
        }
      } else {
        if(__kpWishlistLocalJson == null) {
          __kpWishlistLocalJson = [];
        }
        __kpAddToWishlist(self, __kpWishlistItemData);
      }
    });
  });
}