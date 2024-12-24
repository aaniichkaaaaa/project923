'use strict'

// 1 ЗАДАНИЕ
let name = 'Джон';
let admin = name;
alert(admin)

// 2 ЗАДАНИЕ
let name_city = prompt('Введите название города');
let year_of_education = +prompt('Введите год образования');
let population = +prompt('Введите население города');
let fulfilled = 2024 - year_of_education;
alert(`Городу ${name_city} исполнилось ${fulfilled} лет с момента его образования. Население - ${population} человек`)

// 3 ЗАДАНИЕ
let r = prompt('Введите радиус круга');
let S = 3.14*(r**2);
alert(S)

// 4 ЗАДАНИЕ
let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b);


// let a ='flgk';
// let b = 565;
// let b2 = 565;
// let sum = b + b2;
// alert (sum)

// let n=4;
// let n2 = 6;

// let sum = n+n2;
// let minus = n-n2;
// let umn = n*n2;
// let del = n / n2;
// let ost = n % n2;
// let pow = n2 ** 2;
// alert (pow);

// преобразование строк
// let a = +prompt('Введите число 1', 0);
// let b = +prompt('Введите число 2', 0);
// alert(typeof a)
// alert(a+b);
// alert(a-b);
// alert(a/b);
// alert(a*b);

// let bool = true;
// bool = String(bool)
// alert (typeof bool)