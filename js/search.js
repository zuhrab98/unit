
const form = document.querySelector ('.search');
const button = document.querySelector ('.search__button');
const searchInput = form.querySelector ('input');

button.addEventListener('click', function (e) {
 //Остановка стандартного поведения "e.preventDefault()", тоесть отмена стандартного поведения элемента
//  в данном случаем если при клики на кнопку стандартное поведение (отправить форму)
// то оно будет отменено!!!
// contains ( String содержит ) Проверяет, есть ли данный класс у элемента (вернёт true или false)

// если у нашей формы в списке классов не сушествует Класс "search--visible"
   if (!form.classList.contains('search--visible')) {
        e.preventDefault();
        form.classList.add('search--visible');
   }
   else {
    if (searchInput.value == '') {
        e.preventDefault();
        form.classList.remove('search--visible')
    }
   }
})