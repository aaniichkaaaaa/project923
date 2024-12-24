'use strict';

// ПЕРВОЕ ЗАДАНИЕ
let salaries={
    John: 100,
    Ann: 160,
    Pete: 130
};
alert(salaries.John+salaries.Ann+salaries.Pete);

// ВТОРОЕ ЗАДАНИЕ
function multiplyNumeric(menu){
  for(let key in menu){
    if(typeof menu[key]=== 'number'){
      menu[key]*=2;
    }
  }
}
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };  
multiplyNumeric(menu);
console.log(menu);

// ТРЕТЬЕ ЗАДАНИЕ
let calculator = {
  read(){
    this.a=Number(prompt('Введите первое значение'));
    this.b=Number(prompt('Введите второе значение'));
  },
  sum(){
    return this.a+this.b;
  },
  mul(){
    return this.a*this.b;
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// ЧЕТВЕРТОЕ ЗАДАНИЕ
function extractCurrencyValue(str){
  return +str.slice(1);
}
let price = '$120';
console.log(extractCurrencyValue(price));

// ПЯТОЕ ЗАДАНИЕ
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item=>item.name);
// console.log(users);
// console.log(names);
alert( names ); // Вася, Петя, Маша

// ШЕСТОЕ ЗАДАНИЕ
function getAverageAge(users){
    let sum = users.reduce((accum, item) => {
        return accum += item.age;
    }, 0);
    return sum/users.length;
};
let numbers = [
    {age: 5}, 
    {age: 7}, 
    {age: 9}, 
];

alert(getAverageAge(numbers));
