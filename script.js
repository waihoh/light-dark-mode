const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_breaking_barriers_vnf3_${color}.svg`;
    image2.src = `img/undraw_feeling_happy_jymo_${color}.svg`;
    image3.src = `img/undraw_appreciation_re_p6rl_${color}.svg`;
}

function toggleDarkLightMode(currentTheme) {
    nav.style.backgroundColor = currentTheme === DARK_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = currentTheme === DARK_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = currentTheme === DARK_THEME ? 'Dark Mode' : 'Light Mode';
    currentTheme === DARK_THEME ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    currentTheme === DARK_THEME ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}


// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        toggleDarkLightMode(DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
        toggleDarkLightMode(LIGHT_THEME);
    }
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleDarkLightMode(currentTheme);
    }
}