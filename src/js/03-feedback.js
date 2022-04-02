import throttle from 'lodash.throttle';

const refs = {
    formInput: document.querySelector('.feedback-form'),
    userEmail: document.querySelector('.feedback-form input'),
    textArea: document.querySelector('.feedback-form textarea')
}
let initData = JSON.parse(localStorage.getItem("form-data"));

// заполняем форму значениями из локального хранилища, если такие значения там есть
try {
    if (initData.email) {
        refs.userEmail.value = initData.email;
    }

    if (initData.message) {
        refs.textArea.value = initData.message;
    }
} catch { };

// вешаем слушателя на событие Input и submit
refs.formInput.addEventListener('input', throttle(onFormInput, 500));
refs.formInput.addEventListener('submit', onSubmit);

// получаем значение полей формы и записыаем в локальное хранилище
function onFormInput(event) {
    initData = {
        email: refs.userEmail.value,
        message: refs.textArea.value
    }
    localStorage.setItem("form-data", JSON.stringify(initData));
}

// отправляем форму
function onSubmit(event) {
    event.preventDefault();  
    refs.userEmail.value = "";
    refs.textArea.value = "";
    console.log(initData);
    localStorage.removeItem("form-data");
} 





