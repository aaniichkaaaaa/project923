'use strict'

// ПЕРВОЕ ЗАДАНИЕ
let price = Number(prompt('Стоимость товара'));
let money = Number(prompt('Количество денег'));
if (money==price){
    alert("Покупка совершена")
}
else if(money>price){
    alert(`Покупка совершена. Ваша сдача составляет ${money-price} руб.`)
}
else {
    alert(`Для покупки вам не хватает ${price-money} руб.`)
}

// ВТОРОЕ ЗАДАНИЕ
let number = Number(prompt('Введите число:'));
if (number>0){
    alert(1)
}
else if(number<0){
    alert(-1)
}
else{
    alert(0)
}

// ТРЕТЬЕ ЗАДАНИЕ
let a = +prompt('Введите первое значение:');
let b = +prompt('Введите второе значение:');

let result = (a + b < 4) ?  'Мало' : 'Много';	
alert(result);

// ЧЕТВЕРТОЕ ЗАДАНИЕ

let login = prompt("Введите логин:");
let message = (login == 'Сотрудник') ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : 'Пусто';
alert(message)
