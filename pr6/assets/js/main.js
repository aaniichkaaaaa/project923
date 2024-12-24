    'use strict'

// ПЕРВОЕ ЗАДАНИЕ
// 1
console.log(document.body.children[1].previousSibiling);
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);

// 2
console.log(document.body.childNodes[3]);
console.log(document.body.children[1]);

// 3
let ul = document.body.children[1];
console.log(ul.lastElementChild)

// ВТОРОЕ ЗАДАНИЕ
// for (let node of document.body.childNodes){
//     console.log(node);
// }
let arr = document.querySelectorAll('li');
for(let li of arr){
    li.classList.add('list-item');
    console.log(li);
}

// ТРЕТЬЕ ЗАДАНИЕ
// let a = +prompt('Введите число');
// for(let i=0; i<a;i++){
//     let block=document.createElement('div');
//     block.innerHTML='fgf'
//     document.body.append(block)
// }
let form = document.createElement('form');
form.className = 'form'
console.log(form)
document.body.append(form)

let input1 = document.createElement('input');
input1.className = 'input'
form.append(input1)

let btn = document.createElement('button');
btn.className = 'btn'
btn.innerHTML = 'eeeerdeder'
form.append(btn)
