
const logo = document.querySelector('.logo');
logo.addEventListener('click', function(){
    location.reload();
})

window.addEventListener('scroll', function(){
    const scrollPosition = this.window.scrollY
     ogo.style.left = `${scrollPosition % (window.innerWidth - 100)}px`
})



function toggleCartStatus(){

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');

    const orderForm = document.querySelector('#order-form');

    if(cartWrapper.children.length > 0){
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');

    }else{
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}
