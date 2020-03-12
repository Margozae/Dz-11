'use strict';

const container = document.querySelector('.container');
container.style.display = 'flex';
const square = document.querySelectorAll('.square');
const color = ['blue', 'green', 'yellow'];

for(let j = 0; j < square.length; j++ ) {
    const colorSwitch = function () {
        let i = 0;
        return function () {
            return square[j].style.background = color[i++];
        };
    };
    const getClone = function () {
        container.appendChild(square[j]);
    };
    square[j].addEventListener('click', getClone);
    square[j].addEventListener('click', colorSwitch());
}