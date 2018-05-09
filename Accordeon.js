$(document).ready(function () { 						// Запускаем выполнение скрипта после готовности документа
	$('.accordeon__item > a').on('click', function (e) { // Создаем обработчик событий после нажатия на ссылку внутри
														//элемента с классом accordeon__item
     e.preventDefault();								//Отменяем ссылке стандартное поведение
     var item = $(this).closest('.accordeon__item');	//Создаем переменную со значением поиска 
														//найближайшего предка с классом accordeon__item
     if (!item.hasClass('accordeon__item--active')) {	//Проверяем наличие у элемента класса accordeon__item--active
        item
           .addClass('accordeon__item--active')			//Добавляем элементу класс accordeon__item--active
           .siblings()									//Выбираем соседние элементы
           .removeClass('accordeon__item--active');		//Удаляем класс accordeon__item--active
     }
     else {
        item.removeClass('accordeon__item--active');
     }
  });
)};