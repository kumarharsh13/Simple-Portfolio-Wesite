const { body } = document;
const a = document.querySelectorAll('a');
const socialIconsContainer = document.getElementById('social-icons');
const homeContainer = document.getElementById('home-container');
const socialIcons = document.querySelectorAll('.fab');
const themeContainer = document.getElementById('theme-container');
const themeText = document.getElementById('theme-text');
const icon = document.querySelectorAll('.fas');
const navBar = document.getElementById('navigation-container');
const project = document.querySelectorAll('.project');
console.log(socialIcons);
// When Theme Switch Button is Clicked
function switchTheme() {
    if (themeText.textContent === 'Light') {
        icon[themeIconIndex].classList.replace('fa-sun', 'fa-moon');
        themeText.textContent = 'Dark';
        body.style.background = 'black';
        homeContainer.style.background = 'linear-gradient(to top, #000000, #434343)';
        body.style.color = '#fafafa';

        for (let i = 0; i < socialIcons.length; i++) {
            socialIcons[i].style.color = '#fafafa';
        }
        for (let i = 0; i < a.length; i++) {
            a[i].style.color = '#fafafa';
        }

        for (let i = 0; i < icon.length; i++) {
            icon[i].style.color = "#fafafa";
        }

        socialIconsContainer.style.borderColor = '#fafafa';

        for (let i = 0; i < project.length; i++) {
            project[i].style.border = '2px solid white';
            project[i].style.boxShadow = '0 5px 20px 5px rgba(254, 254, 254, 0.2)';
        }
    }

    else {
        icon[themeIconIndex].classList.replace('fa-moon','fa-sun');
        themeText.textContent = 'Light';
        homeContainer.style.background = 'linear-gradient(to top, #fc9612, #ffffff)';
        body.style.background = 'whitesmoke';
        body.style.color = 'black';
        for (let i = 0; i < socialIcons.length-2; i++) {
            socialIcons[i].style.color = 'black';
        }

        for (let i = 0; i < a.length; i++) {
            a[i].style.color = 'black';
        }

        for (let i = 0; i < icon.length-1; i++) {
            icon[i].style.color = "black";
        }


        socialIconsContainer.style.borderColor = 'black';
        for (let i = 0; i < project.length; i++) {
            project[i].style.border = '0px solid white';
            project[i].style.boxShadow = '0 5px 20px 5px rgba(0, 0, 0, 0.2)';
        }
    }
}

// Navigation Bar On Scrolling 
let lastScroll = 0;
function navBarScroll(params) {
    if(window.scrollY > lastScroll && themeText.textContent === 'Light') {
        navBar.classList.add('navigation-onScrollLight');
        themeContainer.hidden = true;
    } 
    else if(window.scrollY > lastScroll && themeText.textContent === 'Dark') {
        navBar.classList.add('navigation-onScrollDark');
        themeContainer.hidden = true;
    }
    else if (window.scrollY === 0) {
        navBar.classList.remove('navigation-onScrollLight');
        navBar.classList.remove('navigation-onScrollDark');
        themeContainer.hidden = false;
    }
    lastScroll = window.scrollY;
}


let themeIconIndex;
for (let i = 0; i < icon.length; i++) {
    if(icon[i].classList.value === 'fas fa-sun' || icon[i].classList.value === 'fas fa-moon') {
        themeIconIndex = i;
    }
}

icon[themeIconIndex].addEventListener('click',switchTheme);
window.addEventListener('scroll',navBarScroll);