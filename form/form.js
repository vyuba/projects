let myButton = document.querySelector('.button');
let form = document.querySelector('form');
let firstNameInput = document.querySelectorAll('input')[0];
let lastNameInput = document.querySelectorAll('input')[1];
let emailInput = document.querySelectorAll('input')[2];
let firstNameError = document.querySelector('p');
let lastNameError = document.querySelector('.lastNameError');
let emailError = document.querySelector('.emailError');



let emailPattern = /\S+@\S+\.\S+/;
console.log(lastNameError);
myButton.addEventListener('click', () => {
    if (myButton.classList.contains('button')){
        myButton.classList.add('change');
    }else if(myButton.classList.contains('change')){
        myButton.classList.remove('change');
    };
});

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (firstNameInput.value === '') {
        firstNameError.textContent = 'Fill in the blank area'
    }
    if (lastNameInput.value === '') {
        lastNameError.textContent = 'Fill in the blank area'
    } if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address'
    }else{
        emailError.textContent = ''
    }

    let bio = {
        'lastname': lastNameInput.value,
        'firstname': firstNameInput.value,
       'email': emailInput.value
    };
    console.log(bio);
})

