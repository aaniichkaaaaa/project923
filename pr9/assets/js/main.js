'use strict';

let form = document.forms.signin;
let birthdayInput = form.birthday;
let nameInput = form.name;

form.addEventListener('submit', userSignin);
let flag = true;

function userSignin(event){

    event.preventDefault(); //нет перезагрузки страницы
    flag=true;
    birthdayError.innerHTML='';
    nameError.innerHTML='';

    if(nameInput.classList.contains('error__input')){
        nameInput.classList.remove('error__input');
    }
    if(birthdayInput.classList.contains('error__input')){
        birthdayInput.classList.remove('error__input');
    }

    if(!birthdayInput.value){
        birthdayInput.classList.add('error__input');
        birthdayError.innerHTML='Введите дату рождения';
        flag=false;
    }
    else if(birthdayInput.value.length!=4){
        birthdayInput.classList.add('error__input');
        birthdayError.innerHTML = 'Введите 4 символа';
        flag=false;
        
    }
    if(!nameInput.value){
        nameInput.classList.add('error__input');
        nameError.innerHTML='Введите имя';
        flag=false;
    }
    else if(nameInput.value.length<2){
        nameInput.classList.add('error__input');
        nameError.innerHTML = 'Введите больше 1-го символа';
        flag=false;
    }
    if(2024-birthdayInput.value<18){
        birthdayInput.classList.add('error__input');
        birthdayError.innerHTML = 'Вам меньше 18 лет';
        flag=false;
        }
    if(flag==true){
        user.innerHTML = `Здавствуйте, ${nameInput.value}`
    }
}