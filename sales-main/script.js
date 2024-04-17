const dropdown =  document.querySelector('.dropdown');
const menu = document.querySelector('.dropdown-menu');
const arrow = document.querySelector('.box-arrow-space')

dropdown.onclick = () => {
    menu.classList.toggle('ativo');
    arrow.classList.toggle('ativo');
}

/* Abre o mobile-menu e rotacio o arraw correspondente */
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

/* Abre a sessão "Produtos de Vendas" e rotaciona o arrow dessa sessão */ 
function toggleMobileDropdown() {
    let menuMobile = document.querySelector('.dropdown-menu-mobile');
    let iconstyle = document.querySelector('.icon-icon-arraw');

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        iconstyle.style.transform = 'rotate(0deg)';
    }
    else {
        menuMobile.classList.add('open');
        iconstyle.style.transform = 'rotate(180deg)';
    }
}


