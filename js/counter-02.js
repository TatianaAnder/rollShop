
// добавляем прослушку по кликам на всем окне
window.addEventListener('click', function(event){
    // обьявляем переменную для счетчика
    let counter;
    // проверяем клик строго по плюч или минус
    if(event.target.dataset.action === 'plus' || event.target.dataset.action == 'minus'){
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
    // проверяем совершается клик по плюс или минус
    if(event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText;
    }
    // проверяем совершается ли коик по кнопке минус
    if(event.target.dataset.action === 'minus'){
        if(parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove();

            // отобрадение статусо корзины пустая / полная
            toggleCartStatus();
            calcCartPriceAndDelivery();
        }
    }

    // проверяем клик по + или - внутри корзины
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPriceAndDelivery();
    }
});


