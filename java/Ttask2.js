let firstBox  = document.querySelector('.first');
let secondBox = document.querySelector('.second');

firstBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
    secondBox.style.backgroundColor = 'gray';
});


secondBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
    firstBox.style.backgroundColor = 'gray';

});