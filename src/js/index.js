const menuPrincipal = document.querySelector('.menu');
const iconeMenuAbrir = document.querySelector('.menu-hamburguer');
const iconeMenuFechar = document.querySelector('.menu-close');
const botaoPlataforma = document.querySelector('.btn-plataforma');
const abrirPlataformas = document.querySelector('.btn-plataforma .plataformas');

iconeMenuAbrir.addEventListener('click', () => {
    menuPrincipal.classList.add('ativo');
});

iconeMenuFechar.addEventListener('click', () => {
    menuPrincipal.classList.remove('ativo');
});

botaoPlataforma.addEventListener('click', () => {
    if(abrirPlataformas.classList.contains('ativo')){
        abrirPlataformas.classList.remove('ativo');
    }else{
        abrirPlataformas.classList.add('ativo');
    }
})