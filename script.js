'Use strict';
/*function activeMenu() {
    let s = document.querySelectorAll(".menu__item-link");
    return s;
}
activeMenu();
console.log("fsdfasd");*/

const Menu = document.querySelector('.menu');
 
Menu.addEventListener('click', (event) => {
    Menu.querySelectorAll('a').forEach(elem => {
        elem.classList.remove('active');
    })
    event.target.classList.add('active');
});
