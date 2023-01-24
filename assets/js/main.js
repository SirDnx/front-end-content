const toggleMenu = document.querySelector('#toggleMenu');
const btnToggleMenu = document.querySelector('#btnToggleMenu');
const changeIcon = document.querySelector('#changeIcon');
const listItems = document.querySelectorAll('.header__list--item');

btnToggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle('active');
    changeBtnMenu();
});

function changeBtnMenu(){
    if(toggleMenu.classList.contains('active')){
        changeIcon.attributes['name'].value = 'close-outline'
    }else{
        changeIcon.attributes['name'].value = 'menu-outline'
    }
};
    
//Add style in the selected list item

listItems.forEach( item => {
    item.addEventListener("click", () => {
        listItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');

        console.log
    })
});