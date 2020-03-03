
const mainDiv = document.createElement('div');
document.body.append(mainDiv);
mainDiv.style.display = 'flex';
for(let i=0; i < 5; i++) {  // eslint-disable-line 
    const div = document.createElement('div');
    mainDiv.append(div);
    let value = 0;
    const divValue = document.createElement('div');
    div.append(divValue);
    divValue.append(value);
    div.style.height = '80px';
    div.style.width = '80px';
    div.style.marginRight = '50px';
    div.style.background = 'pink';
    div.style.border = '1px solid #000000';
    div.style.textAlign = 'center';
    const btnPlus = document.createElement('button');
    div.append(btnPlus);
    btnPlus.append('+');
    const btnMinus = document.createElement('button');
    div.append(btnMinus);
    btnMinus.append('-');
    btnPlus.addEventListener('click', ( () => {
        divValue.textContent = ++value;
    }));
    btnMinus.addEventListener('click', ( () => {
        divValue.textContent = --value;
    }));
}

