'use strict';

// ПЕРВОЕ ЗАДАНИЕ
// 1
btn1.addEventListener('mousedown', function(){
    btn1.style.color='red';
})
btn1.addEventListener('mouseup', function(){
    btn1.style.color='';
})

// 2
btn2.addEventListener('mouseover', function(){
    btn2.style.color='red';
})
btn2.addEventListener('mouseout', function(){
    btn2.style.color='';
})

// 3
btn3.addEventListener('dblclick', function(){
    btn3.style.color='red';
})

// ВТОРОЕ ЗАДАНИЕ
// 1
document.body.addEventListener('keydown', function(event){
    if(event.key == 'r'){
        document.body.style.background = 'red'
    }
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'r'){
        document.body.style.background = ''
    }
})

// 2
document.body.addEventListener('keydown', function(event){
    if(event.key == 'g'){
        document.body.style.background = 'lightgreen'
    }
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'g'){
        document.body.style.background = ''
    }
})

// 3
document.body.addEventListener('keydown', function(event){
    if(event.key == 'b'){
        document.body.style.background = 'lightblue'
    }
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'b'){
        document.body.style.background = ''
    }
})