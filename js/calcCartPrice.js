function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceEl = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let priceTotal = 0;

    priceEl.forEach(function(item){
        const amoutEl = item.closest('.cart-item').querySelector('[data-counter]');
        const currentPrice = parseInt(amoutEl.innerText) * parseInt(item.innerText);
        priceTotal += currentPrice;
    });
 // отображаем цену на странице
    totalPriceEl.innerText = priceTotal;

// скрываем или показываем стоисость доставки
    if (priceTotal > 0){
        cartDelivery.classList.remove('none');
    }else{
        cartDelivery.classList.add('none');
    }

// указываем стоимость доставки
    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'Бесплатно';
    }else{
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 P';
    }
}