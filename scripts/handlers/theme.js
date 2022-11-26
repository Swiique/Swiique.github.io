const switchtheme = document.querySelector('.changeTheme')
var toggle = 0;


switchtheme.addEventListener('click', () => {
    if(toggle === 0) {

        //Dark
        document.documentElement.style.setProperty('--background-color', '#030303');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--span-color', '#BFBEBE');
        document.documentElement.style.setProperty('--nav-color', 'white');
        document.documentElement.style.setProperty('--button-background-color', '#1D1D1D');
        document.documentElement.style.setProperty('--button-hover-color', '#030303');
        document.documentElement.style.setProperty('--button-hover-color', '#474444');

        document.documentElement.style.setProperty('--bonjour-gradient-color-from', '#007CF0');
        document.documentElement.style.setProperty('--bonjour-gradient-color-to', '#00DFD8');

        document.documentElement.style.setProperty('--experience-gradient-color-from', '#7928CA');
        document.documentElement.style.setProperty('--experience-gradient-color-to', '#FF0080');

        document.documentElement.style.setProperty('--techno-gradient-color-from', '#FF4D4D');
        document.documentElement.style.setProperty('--techno-gradient-color-to', '#F9CB28');

        document.documentElement.style.setProperty('--cursor', 'url("../assets/Ellipse_white.png"), auto');


        toggle++

    } else {
        document.documentElement.style.setProperty('--background-color', 'ffffff');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--span-color', '#000000');
        document.documentElement.style.setProperty('--nav-color', 'black');
        document.documentElement.style.setProperty('--button-background-color', '#F3F3F3');
        document.documentElement.style.setProperty('--button-hover-color', '#F3F3F3');

        document.documentElement.style.setProperty('--bonjour-gradient-color-from', '#007CF0');
        document.documentElement.style.setProperty('--bonjour-gradient-color-to', '#00DFD8');

        document.documentElement.style.setProperty('--experience-gradient-color-from', '#7928CA');
        document.documentElement.style.setProperty('--experience-gradient-color-to', '#FF0080');

        document.documentElement.style.setProperty('--techno-gradient-color-from', '#FF4D4D');
        document.documentElement.style.setProperty('--techno-gradient-color-to', '#F9CB28');

        document.documentElement.style.setProperty('--cursor', 'url("../assets/Ellipse_black.png"), auto');

        document.getElementById('icon').className = 'fas fa-moon'


        toggle--;

    }
})