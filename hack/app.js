
// Your javascript goes here
// This are all the input needed
const profileButt = document.querySelector('.profile');
const profileDropdown = document.querySelector('.profile-dropdown-menu');
const alertButt = document.querySelector('.alert-bell');
const alertDropdown = document.querySelector('.alert-box');
const butt = document.querySelector('.second-dropdown');
const menuItem1 = document.querySelector(".menu-item1");
const menuItem2 = document.querySelector(".menu-item2");
const menuItem3 = document.querySelector(".menu-item3");
const menuItem4 = document.querySelector(".menu-item4");
const menuItem5 = document.querySelector(".menu-item5");
const firstDropdown = document.querySelectorAll('.dropdown')[0];
const secondDropdown = document.querySelectorAll('.dropdown')[1];
const thirdDropdown = document.querySelectorAll('.dropdown')[2];
const fourthDropdown = document.querySelectorAll('.dropdown')[3];
const fifthDropdown = document.querySelectorAll('.dropdown')[4];
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const img5 = document.querySelector('#img5');
const progressBar = document.querySelector('.progress-bar');
const bar = document.querySelector('.bar');
const checkboxInputs = document.querySelectorAll(".svg-container input[type='checkbox']");
let numberChecked = document.querySelector('#numberChecked');
let closeIcon = document.querySelector('#close-icon');
let firstMenu = document.querySelector('.first');
// declarative code 
let isImageVisible = true;
let imgElement = '';
// let newDiv1 = document.createElement('div');

closeIcon.addEventListener('click', () => {
    firstMenu.style.opacity = '0';
})

// Assuming your progress bar has a total width of 100 units
const totalProgressWidth = 100;

// Initialize the current progress
let currentProgress = 0;
let count = 0;

checkboxInputs.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Checkbox is checked, increase the progress
            currentProgress += 20; // You can adjust this value based on your needs
            count +=1;
            // Limit the progress to the total width
            if (currentProgress > totalProgressWidth) {
                currentProgress = totalProgressWidth;
            }

            // Update the width of the progress bar
            bar.style.width = `${currentProgress}%`;
            bar.style.backgroundColor = 'black'
            numberChecked.innerHTML = `${count}`
        } else {
            // Checkbox is unchecked, decrease the progress
            currentProgress -= 20; // You can adjust this value based on your needs
            count -=1;
            // Ensure the progress doesn't go below zero
            if (currentProgress < 0) {
                currentProgress = 0;
            }

            // Update the width of the progress bar
            bar.style.width = `${currentProgress}%`;
            numberChecked.innerHTML = `${count}`
            // bar.style.backgroundColor = '#E3E3E3'
        }
    });
});

//end of copy code



profileButt.addEventListener('click',() => {
    profileDropdown.classList.toggle('visible')
    alertDropdown.classList.remove('visible')
})

alertButt.addEventListener('click',() => {
    alertDropdown.classList.toggle('visible')
    profileDropdown.classList.remove('visible')
})

menuItem1.addEventListener('click',() => {
    menuItem1.classList.toggle('menu-item1')
    img1.classList.toggle('visible')
    img2.classList.remove('visible')
    img3.classList.remove('visible')
    img4.classList.remove('visible')
    img5.classList.remove('visible')
    menuItem2.classList.add('menu-item2')
    menuItem3.classList.add('menu-item3')
    menuItem4.classList.add('menu-item4')
    menuItem5.classList.add('menu-item5')
})

menuItem2.addEventListener('click',() => {
    menuItem2.classList.toggle('menu-item2')
    img2.classList.toggle('visible')
    img1.classList.remove('visible')
    img3.classList.remove('visible')
    img4.classList.remove('visible')
    img5.classList.remove('visible')
    menuItem3.classList.add('menu-item3')
    menuItem4.classList.add('menu-item4')
    menuItem5.classList.add('menu-item5')
    menuItem1.classList.add('menu-item1')
})

menuItem3.addEventListener('click',() => {
    menuItem3.classList.toggle('menu-item3')
    img3.classList.toggle('visible')
    img1.classList.remove('visible')
    img2.classList.remove('visible')
    img4.classList.remove('visible')
    img5.classList.remove('visible')
    menuItem4.classList.add('menu-item4')
    menuItem5.classList.add('menu-item5')
    menuItem1.classList.add('menu-item1')
    menuItem2.classList.add('menu-item2')
})

menuItem4.addEventListener('click',() => {
    menuItem4.classList.toggle('menu-item4')
    img4.classList.toggle('visible')
    img1.classList.remove('visible')
    img2.classList.remove('visible')
    img3.classList.remove('visible')
    img5.classList.remove('visible')
    menuItem5.classList.add('menu-item5')
    menuItem1.classList.add('menu-item1')
    menuItem2.classList.add('menu-item2')
    menuItem3.classList.add('menu-item3')
})
menuItem5.addEventListener('click',() => {
    menuItem5.classList.toggle('menu-item5')
    img5.classList.toggle('visible')
    img1.classList.remove('visible')
    img3.classList.remove('visible')
    img4.classList.remove('visible')
    img2.classList.remove('visible')
    menuItem1.classList.add('menu-item1')
    menuItem2.classList.add('menu-item2')
    menuItem3.classList.add('menu-item3')
    menuItem4.classList.add('menu-item4')
})

up.addEventListener('click',() => {
    const closeDropdown = document.querySelector('.second');
    closeDropdown.classList.toggle('visible')
    up.style.display = 'none';
    down.style.display = 'block';
})

down.addEventListener('click',() => {
    const closeDropdown = document.querySelector('.second');
    closeDropdown.classList.toggle('visible')
    up.style.display = 'block';
    down.style.display = 'none';
})

