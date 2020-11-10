let firstBox  = document.querySelector('.first');
let secondBox = document.querySelector('.second');
let threeBox = document.querySelector('.three');

firstBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
    secondBox.style.backgroundColor = 'gray';
    threeBox.style.backgroundColor = 'gray';
});


secondBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'yellow';
    firstBox.style.backgroundColor = 'gray';
    threeBox.style.backgroundColor = 'gray';

});

threeBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'green';
    firstBox.style.backgroundColor = 'gray';
    secondBox.style.backgroundColor = 'gray';

});