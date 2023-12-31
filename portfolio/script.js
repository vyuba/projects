document.addEventListener('DOMContentLoaded', () => {
    const slideMenu = document.querySelector('#slideMenu');
    slideMenu.classList.add('hidden');
});

const hamburger = document.querySelector('#hamburger');
const closeBurger = document.querySelector('#closeIcon');
const slideMenu = document.querySelector('#slideMenu');
const body = document.body;
console.log(slideMenu)
hamburger.addEventListener('click', () =>{
    slideMenu.classList.toggle('hidden')
    body.classList.toggle('no-scroll');
})

closeBurger.addEventListener('click', () => {
    slideMenu.classList.add('hidden');
    body.classList.remove('no-scroll');
});
console.log(hamburger)