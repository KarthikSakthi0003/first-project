const menuBar = document.querySelector('.header--menu-bar');

menuBar.addEventListener('click', changeMenuState);

function changeMenuState() {

    const headerMenu = document.querySelector('#header-menu');
    const menuIcon = document.querySelectorAll('.menu-icon');


    //show menu programmatically
    headerMenu.classList.toggle("show");

    menuIcon.forEach(icon => {
        icon.classList.toggle("hidden");

    });
}

changeMenuState();

function menuBarFixed() {
    const header_dom = document.querySelector(".header");
    const menu_offset_top = header_dom.clientHeight + 50;

    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll >= menu_offset_top) {
            header_dom.classList.add('menubar--fixed')
        }
        else (header_dom.classList.remove('menubar--fixed')
        )
    });

}
menuBarFixed();

function setMenuActive() {
    const sections = document.querySelectorAll("section");
    const menuLink = document.querySelectorAll(".header--menu > li > a");
    let current = "";
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        menuLink.forEach(li => {
            li.classList.remove("active");
            if (current == li.getAttribute("href").split('#')[1]) {
                li.classList.add('active');
            }
        });
    });
}
setMenuActive();

function onMenuClick() {
    const menuLink = document.querySelectorAll(".header--menu > li > a");
    for (let i = 0; i < menuLink.length; i++) {

        menuLink[i].addEventListener("click", changeMenuState);
    }

}
onMenuClick();