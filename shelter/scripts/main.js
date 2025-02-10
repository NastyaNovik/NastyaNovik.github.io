const menuList = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuList.addEventListener('click', () =>{
    menu.classList.toggle('active');
})