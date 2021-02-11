import './sass/styles.scss';
import menuItems from './menu.json';
import itemsTemplate from './templates/menu-items.hbs';


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
    checked: true,
};


const bodyRef = document.body;
const switchToggleRef = document.querySelector('#theme-switch-toggle')
const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menuItems);

menuRef.insertAdjacentHTML('beforeend', markup);

function themeToggle() {
    bodyRef.classList.toggle(Theme.DARK);
    bodyRef.classList.toggle(Theme.LIGHT);
    if (bodyRef.classList.contains(Theme.DARK)) {
        localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
        localStorage.setItem('Checked', JSON.stringify(Theme.checked))
    }
    if (bodyRef.classList.contains(Theme.LIGHT)) {
        localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
        localStorage.setItem('Checked', JSON.stringify(!Theme.checked));
    }    
}


const savedItems = localStorage.getItem('Theme');
const parsedItems = JSON.parse(savedItems);
bodyRef.classList.add(parsedItems);

if (bodyRef.classList.contains(parsedItems)) {
    if (parsedItems === Theme.DARK) {
        switchToggleRef.setAttribute('checked', '');
    } else {
        switchToggleRef.removeAttribute('checked', '');
    }
}


switchToggleRef.addEventListener('change', themeToggle);
