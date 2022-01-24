const opener = document.querySelector('.menu-opener');
const nav = document.querySelector('#navigation');

function openClose() {
    if(nav.style.display == 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}