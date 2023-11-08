// let button = document.querySelectorAll('button');
let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.innerText == "="){
          return input.value = eval(input.value)
        }
         if (button.innerText == "C"){
           return input.value = '';
        }

        input.value += button.textContent
    })
})




