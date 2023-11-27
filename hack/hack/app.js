
// Your javascript goes here
// This are all the input needed
const profileButt = document.querySelector('.profile');
const profileDropdown = document.querySelector('.profile-dropdown-menu');
const allMenuDropdown = document.querySelector('.first-dropdown');
console.log(allMenuDropdown);
const alertButt = document.querySelector('.alert-bell');
const alertDropdown = document.querySelector('.alert-box');
const allAlertMenuItem = document.querySelectorAll('[role="alert"]')
const allMenus = document.querySelectorAll('.second-dropdown');
const allMenuItem = document.querySelectorAll('.menu-tem')
const allProfileMenuItem = document.querySelectorAll('[role="menuitem"]');
// const firstDropdown = document.querySelectorAll('.dropdown')[0];
// const secondDropdown = document.querySelectorAll('.dropdown')[1];
// const thirdDropdown = document.querySelectorAll('.dropdown')[2];
// const fourthDropdown = document.querySelectorAll('.dropdown')[3];
// const fifthDropdown = document.querySelectorAll('.dropdown')[4];
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const allImg = document.querySelectorAll('.img');
console.log(allImg);
// const img1 = document.querySelector('#img1');
// const img2 = document.querySelector('#img2');
// const img3 = document.querySelector('#img3');
// const img4 = document.querySelector('#img4');
// const img5 = document.querySelector('#img5');
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


// console.log(allMenuItem);
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

const handleProfileEscapeKeyPress = (event) => {
    if (event.key === 'Escape') {
        profileToggleMenu()
    }
}

const handleProfileKeyPress = (event) => {
    if(event.key === 'Enter'){
        profileButt.click();
    }
}

const handleAlertEscapeKeyPress = (event) => {
    if (event.key === 'Escape') {
        alertToggleMenu()
    }
}

const handleAlertKeyPress = (event) => {
    if (event.key === 'Enter') {
        alertButt.click();
    }
}

const handleCloseKeyPress = (event) => {
    if (event.key === 'Enter') {
        firstMenu.style.opacity = '0';
    }
}




closeIcon.addEventListener('click', () => {
    firstMenu.style.opacity = '0';
})
    
closeIcon.addEventListener('keydown', handleCloseKeyPress);


function handleProileMenuItemArrowKeyPress(event, menuItemIndex) {
    const isLastMenuItem = menuItemIndex === allProfileMenuItem.length - 1;
    const isFirstMenuItem = menuItemIndex === 0;

    const nextMenuItem = allProfileMenuItem.item(menuItemIndex + 1)
    const previousMenuItem = allProfileMenuItem.item(menuItemIndex - 1)
    if (event.key === 'ArrowRight' || event.key === "ArrowDown" ) {
        
        if (isLastMenuItem) {
            allProfileMenuItem.item(0).focus()
            return
        }
        nextMenuItem.focus();
    }

    if (event.key === 'ArrowUp' || event.key === "ArrowLeft" ) {
        if (isFirstMenuItem) {
            allProfileMenuItem.item(allProfileMenuItem.length-1).focus()
            return
        }

        previousMenuItem.focus()
    }
}

const profileOpenMenu = () => {
    profileDropdown.ariaExpanded = 'true';
    allProfileMenuItem.item(0).focus();

    profileDropdown.addEventListener('keyup',handleProfileEscapeKeyPress)

    allProfileMenuItem.forEach(function (menuItem, menuItemIndex ) {
        menuItem.addEventListener('keyup', (event)=>{
            handleProileMenuItemArrowKeyPress(event, menuItemIndex)
        })
    })
}

const profileCloseMenu = () => {
    profileDropdown.ariaExpanded = "false";
    profileButt.focus();
}

const profileToggleMenu = () => {
    profileDropdown.classList.toggle('visible')
    alertDropdown.classList.remove('visible')
    const  profileIsExapanded = profileDropdown.attributes["aria-expanded"].value === 'true';

    if (profileIsExapanded) {
        profileCloseMenu()
    }else{
        profileOpenMenu()
    }
}








profileButt.addEventListener('click',profileToggleMenu);
profileButt.addEventListener('keydown',handleProfileKeyPress);

// alert-Menu functions

const alertOpenMenu = () => {
    alertDropdown.ariaExpanded = 'true';
    allAlertMenuItem.item(0).focus();

    alertDropdown.addEventListener('keyup',handleAlertEscapeKeyPress)
}

const alertCloseMenu = () => {
    alertDropdown.ariaExpanded = "false";
    alertButt.focus();
}

const alertToggleMenu = () => {
    alertDropdown.classList.toggle('visible')
    profileDropdown.classList.remove('visible')
    const  alertIsExapanded = alertDropdown.attributes["aria-expanded"].value === 'true';

    if (alertIsExapanded) {
        alertCloseMenu()
    }else{
        alertOpenMenu()
    }
}

alertButt.addEventListener('click', alertToggleMenu)
alertButt.addEventListener('keydown',handleAlertKeyPress);



const handleDownKeyPress = (event) => {
    if (event.key === 'Enter') {
        down.dispatchEvent(new Event('mousedown'));
        down.dispatchEvent(new Event('mouseup'));
    }
}

down.addEventListener('mousedown', () => {
    const closeDropdown = document.querySelector('.second');
    closeDropdown.classList.toggle('visible');
    up.style.display = 'block';
    down.style.display = 'none';
});

down.addEventListener('keydown', handleDownKeyPress);

const handleUpKeyPress = (event) => {
    if (event.key === 'Enter') {
        up.dispatchEvent(new Event('mousedown'));
        up.dispatchEvent(new Event('mouseup'));
    }
}

up.addEventListener('mousedown', () => {
    const closeDropdown = document.querySelector('.second');
    closeDropdown.classList.toggle('visible');
    up.style.display = 'none';
    down.style.display = 'block';
});

up.addEventListener('keydown', handleUpKeyPress);


document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        
    }
});



const handleAllMenuEscapeKeyPress = (event) => {
    if (event.key === 'Escape') {
        profileToggleMenu()
    }
}

const handleAllMenuKeyPress = (event) => {
    if(event.key === 'Enter'){
        profileButt.click();
    }
}



function handleAllMenusItemArrowKeyPress(event, menuItemIndex) {
    const isLastMenuItem = menuItemIndex === allMenus.length - 1;
    const isFirstMenuItem = menuItemIndex === 0;

    const nextMenuItem = allMenus.item(menuItemIndex + 1)
    const previousMenuItem = allMenus.item(menuItemIndex - 1)
    if (event.key === 'ArrowRight' || event.key === "ArrowDown" ) {
        
        if (isLastMenuItem) {
            allMenus.item(0).focus()
            return
        }
        nextMenuItem.focus();
    }

    if (event.key === 'ArrowUp' || event.key === "ArrowLeft" ) {
        if (isFirstMenuItem) {
            allMenus.item(allMenus.length-1).focus()
            return
        }

        previousMenuItem.focus()
    }
}

const allMenusOpenMenu = () => {
    allMenus.ariaExpanded = 'true';
    allMenus.item(0).focus();

    // profileDropdown.addEventListener('keyup',handleProfileEscapeKeyPress)

    allMenus.forEach(function (menuItem, menuItemIndex ) {
        menuItem.addEventListener('keyup', (event)=>{
            handleAllMenusItemArrowKeyPress(event, menuItemIndex)
        })
    })
}

const allMenuCloseMenu = () => {
    allMenuDropdown.ariaExpanded = "false";
    // profileButt.focus();
}

const allMenuToggleMenu = () => {
    // profileDropdown.classList.toggle('visible')
    // alertDropdown.classList.remove('visible')
    const  allMenuIsExapanded = allMenuDropdown.attributes["aria-expanded"].value === 'true';

    if (allMenuIsExapanded) {
        allMenuCloseMenu()
    }else{
        allMenusOpenMenu()
    }
}



function toggleMenu(menu) {
    let isOpen = menu.classList.contains('menu-item');
    allMenus 

    // Close all menus
    allMenus.forEach(function (menuItem) {
    //   menuItem.style.height = '0';
      menuItem.classList.remove('menu-item');
      toggleImg(menuItem, false);
    });

    toggleImg(menu, !isOpen);
    // Open or close the clicked menu
    if (!isOpen) {
    //   menu.style.height = '50px';
      menu.classList.add('menu-item');
    }else{
        menu.classList.remove('menu-item');
    }

    
 }

 function toggleImg(menu, isVisible) {
    // Find the associated image within the menu
    let img = menu.querySelector('img');
    if (img) {
        img.classList.toggle('visible', isVisible);
    }
}

//  function toggleImg(menu, isVisible) {
//     // Find the associated image within the menu
//     let img = menu.querySelector('img');
//     if (img) {
//         img.classList.toggle('visible', isVisible);
//     }
// }



allMenus.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        // toggleImg(this)
      toggleMenu(this);
        
 // Trigger the focus event
    });

    menuItem.addEventListener('focus', () =>{
        toggleMenu(menuItem)
    })
});

