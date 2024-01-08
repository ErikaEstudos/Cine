
const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

btnRight.addEventListener('click', function(){
    pixels = pixels -783;
    if(pixels >= - 784){
        btnRight.style.visibility="hidden";
    }
    if(pixels <= 595){
        btnLeft.style.visibility="visible";
    }
    elements.style = `transform: translateX(${pixels}px)`;     
})

btnLeft.addEventListener('click', function(){
    pixels = pixels +783;
    if(pixels >= 0){
        btnLeft.style.visibility="hidden";
    } 
    if(pixels <= 595){
        btnRight.style.visibility="visible";
    }
     elements.style = `transform: translateX(${pixels}px)`;     
})


 

