function toggleNav() {
    let nav = document.getElementById("myNav");
    if (nav.style.height === "100%") {
        nav.style.height = "0%";
    } else {
        nav.style.height = "100%";
    }
}
document.querySelectorAll('.overlay a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            toggleNav();
        }
    });
});
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar-container');
    let buttons = document.querySelectorAll('.menu-toggle-button-mobile, .phone-number-mobile');
    let menuButtonImage = document.querySelector('.menu-toggle-button-mobile img');
    let callButtonImage = document.querySelector('.phone-number-mobile img');
    let mainSection = document.querySelector('main');
    let scrollPosition = window.scrollY;
    let mainSectionTop = mainSection.offsetTop;

    if (scrollPosition >= mainSectionTop) {
        navbar.style.backgroundColor = '#FFFFFF';
        navbar.style.color = '#141024';
        buttons.forEach(button => {
            button.style.borderColor = '#141024';
        });
        menuButtonImage.src = 'icons/menu_dark.png';
        callButtonImage.src = 'icons/call_dark.png';
    } else {
        navbar.style.backgroundColor = '#141024';
        navbar.style.color = '#FFFFFF';
        buttons.forEach(button => {
            button.style.borderColor = '#FFFFFF';
        });
        menuButtonImage.src = 'icons/menu_light.png';
        callButtonImage.src = 'icons/call_light.png';
    }
});


function handleResize() {
    if (window.innerWidth < 1024) {
        let aboutButton = document.getElementById("aboutButton");
        let aboutTabs = document.querySelectorAll(".about-tab");

        aboutTabs.forEach(function(tab) {
            tab.addEventListener("click", function(event) {
                let tabName = event.target.textContent;
                if (tab.style.display !== "none") {
                    aboutTabs.forEach(function(innerTab) {
                        innerTab.style.display = "none";
                    });
                    aboutButton.textContent = "About";
                } else {
                    aboutTabs.forEach(function(innerTab) {
                        innerTab.style.display = "none";
                    });
                    event.target.style.display = "block";
                    aboutButton.textContent = tabName;
                }
            });
        });

        aboutButton.addEventListener("click", function() {
            let isAnyTabVisible = false;
            aboutTabs.forEach(function(tab) {
                if (tab.style.display !== "none") {
                    isAnyTabVisible = true;
                    tab.style.display = "none";
                }
            });

            if (!isAnyTabVisible) {
                aboutTabs.forEach(function(tab) {
                    tab.style.display = "block";
                });
                aboutButton.textContent = "About";
            }
        });
    }
}

handleResize();

window.addEventListener('resize', handleResize);