const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const dropdownList = document.querySelector('.dropdown-list');

let isDropdownVisible = false;

dropdownBtn.addEventListener('click', function() {
    if (isDropdownVisible) {
        dropdownContent.style.animation = 'slide-up 0.5s forwards';
        dropdownList.style.animation = 'slide-up-opacity 0.5s forwards';
    } else {
        dropdownContent.style.animation = 'slide-down 0.5s forwards';
        dropdownList.style.animation = 'slide-down-opacity 0.5s forwards';
        dropdownContent.style.display = 'block';
    }
    isDropdownVisible = !isDropdownVisible;
});