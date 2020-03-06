'use strict';

document.body.style.display = 'flex';
for(let i=0; i < 5; i++) {  // eslint-disable-line 
    const div = document.createElement('div');
    document.body.append(div);
    div.style.height = '80px';
    div.style.width = '80px';
    div.style.marginRight = '50px';
    div.style.border = '1px solid #000000';


    
    function counter() {
        let color = ['blue', 'green', 'yellow'];
        for (let i=0; i < Infinity; i++) {
            div.style.background = color[i] ;
        }
    }
    div.addEventListener('click', counter);
}
   // eslint-disable-line 
