let quantity = 0;
const add_to_cart_btn = document.querySelector('.submit-btn')
const placeEl = document.querySelector('.place');

add_to_cart_btn.addEventListener('click', function() {
    const quantity_element = document.querySelector('.quantity');
    cart_add = parseInt(quantity_element.value);
    quantity += cart_add
    placeEl.innerHTML = quantity


});


