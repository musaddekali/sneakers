const navOpener = document.querySelector('.nav-menu-toggler');
const navCloser = document.querySelector('.nav-menu-nav-close');
const navContainer = document.querySelector('.nav-menu-nav');
const navContent = document.querySelector('.nav-menu-nav > ul');
const shopingListBtn = document.querySelector('.nav-cart');
const shopingCart = document.querySelector('.shoping-cart-wrap');
const productQuantityIncrement = document.querySelector('.next-number');
const productQuantityDecrement = document.querySelector('.prev-number');
const productQuantityInput = document.querySelector('.quantity-input');
const addToCartBtn = document.querySelector('.add-to-cart');
let price = document.getElementById('price');
let priceVal = parseFloat(price.innerText);

let isNavMenuOpen = false;
let isShopingCartOpen = false;

function openNavMenu() {
    if (!isNavMenuOpen) {
        navContainer.classList.add('open');
        navContent.classList.add('open');
        isNavMenuOpen = true;
    }
};

function closeNavMenu() {
    if (isNavMenuOpen) {
        navContainer.classList.remove('open');
        navContent.classList.remove('open');
        isNavMenuOpen = false;
    }
};

navOpener.addEventListener('click', () => {
    openNavMenu();
});

navCloser.addEventListener('click', () => {
    closeNavMenu();
});

navContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'UL') {
        return;
    }
    closeNavMenu();
});

/// toggle product cart
shopingListBtn.addEventListener('click', (e) => {
    if (!isShopingCartOpen) {
        shopingCart.classList.add('open');
        isShopingCartOpen = true;
    } else {
        shopingCart.classList.remove('open');
        isShopingCartOpen = false;
    }
});

/// product Quantity increment and decrement 
function quantityConcern() {


    function increment(n) {
        if (n >= 5) {
            alert('Max product 5');
            return n;
        }
        return n += 1;
    }

    function decrement(n) {
        if (n <= 1) {
            alert('You can not decrement more');
           return n = 1;
        }
        return n -= 1;
    }

    productQuantityIncrement.addEventListener('click', () => {
        productQuantityInput.value = increment(Number(productQuantityInput.value));
        price.innerText = parseFloat(productQuantityInput.value * priceVal);
    });

    productQuantityDecrement.addEventListener('click', () => {
        productQuantityInput.value = decrement(Number(productQuantityInput.value));
        price.innerText = parseFloat(productQuantityInput.value * priceVal);
    })

}
quantityConcern();

// Add to cart btn alert 
addToCartBtn.addEventListener('click', () => {
    alert('Your item has Successfully added');
})




// jQuery image lightbox init 
$(document).ready(function () {
    $('.venobox').venobox();
});
