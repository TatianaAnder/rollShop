
const logo = document.querySelector('.logo');
logo.addEventListener('click', function(){
    location.reload();
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


document.addEventListener('DOMContentLoaded', function(){
    const phoneInput = document.querySelector('#phone');
    const errorMessage = document.querySelector('#error-message');


    phoneInput.addEventListener('input', function(event){
        let valueInput = phoneInput.ariaValueMax.replace(/\D/g, '');

        if (valueInput > 10) {
            valueInput = valueInput.slice(0, 10);
        
        if (inputValue.length > 1) {
            inputValue = '+7 (' + inputValue.slice(1, 4) + ') ' + inputValue.slice(4, 7) + '-' + inputValue.slice(7, 9) + '-' + inputValue.slice(9, 11);
            } else if (inputValue.length > 0) {
            inputValue = '+7 (' + inputValue.slice(1, 4);
            }
            phoneInput.value = inputValue; // Обновляем поле ввода

    // Очищаем сообщение об ошибке, если ввод правильный
        errorMessage.textContent = '';
        }
    });

    document.getElementById('order-form').addEventListener('submit', function(event) {
        const phoneValue = phoneInput.value.replace(/\D/g, ''); // Убираем все символы, не являющиеся цифрами
    
        if (phoneValue.length !== 10) {
            event.preventDefault(); // Отменяем отправку формы, если номер неправильный
            errorMessage.textContent = 'Пожалуйста, введите правильный номер телефона.';
        }
    });
});