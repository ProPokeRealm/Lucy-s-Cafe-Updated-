let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
}
