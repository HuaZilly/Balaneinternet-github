let Button__toggle = document.querySelector('.nav-icon');
let Menu = document.querySelector('.main-menu')
Button__toggle.addEventListener('click', () => {
    Menu.classList.toggle('toggle');
})
let Toggle_list = document.querySelector('.toggle-list')
let Back_submenu = document.querySelector('.back-submenu')
let Toggle_submenu = document.querySelector('.sub-menu')


Toggle_list.addEventListener('click', () => {
    Toggle_list.classList.add('new-toggle')
})
Back_submenu.addEventListener('click', () => {
    //  Toggle_submenu.classList.add('return-mainmenu')
    Toggle_list.classList.remove('new-toggle')
})