// находим элементы на странице, отслеживаем клик на кнопки - и + 
let btnLeft = document.querySelectorAll('[data-action="minus"]');
let btnRight = document.querySelectorAll('[data-action="plus"]');
let counter = document.querySelectorAll('[data-counter]');

btnLeft.addEventListener('click', function(){
    if(parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText;
    }
});
btnRight.addEventListener('click', function(){
    counter.innerText = ++counter.innerText;
});



