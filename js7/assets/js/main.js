"use strict";

document.body.addEventListener('click', function() {
    btn.style.display = 'none';
});
document.addEventListener('click', function() {
})

document.body-addEventListener('keydown', function (event){
    if(event.key == 'r'){
        document.body.style.background = 'red'
    }
})
document.body-addEventListener('keyup', function(event){
    if(event.key == 'r')
        document.body.style.background = ''
})

document.body-addEventListener('keydown', function (event){
    if(event.key == 'g'){
        document.body.style.background = 'green'
    }
})
document.body-addEventListener('keyup', function(event){
    if(event.key == 'g')
        document.body.style.background = ''
})

document.body-addEventListener('keydown', function (event){
    if(event.key == 'b'){
        document.body.style.background = 'blue'
    }
})
document.body-addEventListener('keyup', function(event){
    if(event.key == 'b')
        document.body.style.background = ''
})