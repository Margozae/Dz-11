'use strict';

const container = document.querySelector('.container');
container.style.display = 'flex';
const square = document.querySelectorAll('.square');

for(let i = 0; i < square.length; i++) {
    let value = 0;
    const divValue = document.createElement('div');
    divValue.style.marginBottom = '15px';
    square[i].append(divValue);
    divValue.append(value);
    const btnPlus = document.createElement('button');
    square[i].append(btnPlus);
    btnPlus.append('+');
    const btnMinus = document.createElement('button');
    square[i].append(btnMinus);
    btnMinus.append('-');
    btnPlus.addEventListener('click', ( () => {
        divValue.textContent = ++value;
    }));
    btnMinus.addEventListener('click', ( () => {
        divValue.textContent = --value;
    }));
}

