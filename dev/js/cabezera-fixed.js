//CABEZERA FIXED
var menu = document.getElementById('inicio');
var altura = menu.offsetTop;

window.addEventListener('scroll', function(){
    if (window.pageYOffset > altura) {
        menu.classList.add('fixed');
    }   else {
        menu.classList.remove('fixed');
    }
});

//BOTÓN MENU

let icono = document.getElementById('icono-menu');
let nav = document.getElementById('mainMenu');
let visibleMenu = document.getElementById('btn-menu');
icono.addEventListener('click', function(){
    nav.classList.toggle('movimiento');
    visibleMenu.classList.toggle('visible');
})

var classNames = [];
if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) classNames.push('device-ios');
if (navigator.userAgent.match(/android/i)) classNames.push('device-android');

var html = document.getElementsByTagName('html')[0];

if (classNames.length) classNames.push('on-device');
if (html.classList) html.classList.add.apply(html.classList, classNames);
