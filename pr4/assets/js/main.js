'use strict';

// ПЕРВОЕ ЗАДАНИЕ
function showNumbers1(Numbers){
    let num1=+prompt('Введите первое число:'); //1
    let num2=+prompt('Введите второе число:'); //10
    for(num1; num1<=num2; num1++){
        if (num1%2==0)
        {
            alert(num1)
        }
    }
}
showNumbers1();

// ВТОРОЕ ЗАДАНИЕ
let i = 0;
while (i<3)
{
    alert(`number${i}!`)
    i++;
}

// ТРЕТЬЕ ЗАДАНИЕ
let num;
do
{
    num = prompt('Введите число больше 10:')
}
while(num<=10 && num)

// ЧЕТВЕРТОЕ ЗАДАНИЕ
function showNumbers(a,b)
{
    if (a<b){
        alert(`Минимальное значение = ${a}`)
    }
    if (a>b){
        alert(`Минимальное значение = ${b}`)
    }
}
let a = prompt('Введите первое число:');
let b = prompt('Введите второе число:');

showNumbers(a,b);
