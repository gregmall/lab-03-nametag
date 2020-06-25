

const buttonpink= document.getElementById('pink');

buttonpink.addEventListener('click', () => {
   
    main.style.background = 'pink';  

    //get the input
    //get the input value
    //get the div
    //set text content of div to input value
    
})

const buttongreen= document.getElementById('green');
buttongreen.addEventListener('click', () => {
    main.style.background = 'green';
})

const buttonblue= document.getElementById('blue');
buttonblue.addEventListener('click', () => {
    main.style.background = 'blue';
})

const nameHere = document.getElementById('namebutton');
nameHere.addEventListener('click', ()=>{
    const myInput = document.getElementById('namefield');
    
    const namePrint=myInput.value;
    const nameWritten= document.getElementById('namehere')
    nameWritten.textContent= namePrint;

})


