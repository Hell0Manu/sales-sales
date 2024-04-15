const dropdown =  document.querySelector('.dropdown');
const menu = document.querySelector('.dropdown-menu');

dropdown.onclick = () => {
    menu.classList.toggle('ativo')
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let iconMobile = document.querySelector('.icon-arraw-mobile')

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        iconMobile.style.transform = 'rotate(223deg)';

    }
    else {
        menuMobile.classList.add('open');
        iconMobile.style.transform = 'rotate(43deg)';
    }
}
