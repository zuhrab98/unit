// const modal = document.querySelector('.nav-icon').addEventListener ('click', function() {
//     this.classList.toggle('nav-icon--active');
// })

const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');


navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active');
})

// Находим ссылки внутри мобильной навигации
const navLink = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLink.forEach(function(item){
// Для каждой ссылки добовляем прослушкупо событию 'click'
    item.addEventListener('click', function (){
        nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
        nav.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
    })
})