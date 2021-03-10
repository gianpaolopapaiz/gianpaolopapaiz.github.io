/*let logo = document.getElementById('logo');

function whiteRabbit() {
    let paragraph = document.createElement('p');
    let position = document.getElementById('banner-text');
    paragraph.innerHTML = 'Follow the white rabbit ...';
    position.appendChild(paragraph);
    logo.removeEventListener('click', whiteRabbit);   
}

logo.addEventListener('click', whiteRabbit);




let myName = document.getElementById('name');
let initialSize = myName.style.fontSize;

function grow() {
    myName.style.fontSize =  '3rem';
    myName.removeEventListener('mouseenter', grow); 
}

myName.addEventListener('mouseenter', grow);




