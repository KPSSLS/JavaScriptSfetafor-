let box =  document.querySelector('.box');
let boxText = document.querySelector('#box-text');
const yellowButton = document.querySelector('.yellow');

boxText.addEventListener('copy', () => {
    if(boxText.innerHTML === 'Blank') {
        alert('You  have copied Blank');
    } else {
        console.log('text copied: ', boxText.innerHTML);
    }
    
});

box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'transparent';
    box.style.color = 'black';
    boxText.innerHTML = 'black';
    console.log('Oops, the mouse have left the area');
});

box.addEventListener('mouseenter', () => {
    console.log('The Mouse in the Box!');
});

yellowButton.addEventListener('click', () => {
    box.style.backgroundColor = 'yellow';
    box.style.color = 'brown';
    boxText.innerHTML = 'yellow';
});

function paintRed() {
    box.style.backgroundColor = 'red';
    box.style.color = 'white';
    boxText.innerHTML = 'red';
}

function paintGreen() {
    box.style.backgroundColor = 'green';
    box.style.color = 'white';
    boxText.innerHTML = 'green';
}

function paintBlue() {
    box.style.backgroundColor = 'blue';
    box.style.color = 'white';
    boxText.innerHTML = 'blue';
}