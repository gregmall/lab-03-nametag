//  Color Buttons Below

const buttonpink= document.getElementById('pink');

buttonpink.addEventListener('click', () => {
   
    main.style.background = 'pink';  
   
})

const buttongreen= document.getElementById('green');
buttongreen.addEventListener('click', () => {
    main.style.background = 'green';

})

const buttonblue= document.getElementById('blue');
buttonblue.addEventListener('click', () => {
    main.style.background = 'blue';

})

const buttonred= document.getElementById('red');
buttonred.addEventListener('click', () => {
    main.style.background = 'red';
})

// Name Button Below

const nameHere = document.getElementById('namebutton');
nameHere.addEventListener('click', ()=>{
    const myInput = document.getElementById('namefield');
    
    const namePrint=myInput.value;
    const nameWritten= document.getElementById('namehere')
    nameWritten.textContent= namePrint;

})


