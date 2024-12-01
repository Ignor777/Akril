function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
// Функция для переключения темной и светлой темы
function toggleDarkMode() {
    // Переключаем класс 'dark-mode' у body, чтобы изменить тему на сайте
    document.body.classList.toggle('dark-mode');

    // Переключаем класс 'dark-mode' у навигационной панели
    document.querySelector('nav').classList.toggle('dark-mode');

    // Переключаем класс 'dark-mode' у футера
    document.querySelector('footer').classList.toggle('dark-mode');

    // Переключаем класс 'dark-mode' у всех ссылок в кнопках
    document.querySelectorAll('.button-link').forEach(function(button) {
        button.classList.toggle('dark-mode');
    });

    // Переключаем класс 'dark-mode' у всех секций
    document.querySelectorAll('section').forEach(function(section) {
        section.classList.toggle('dark-mode');
    });
}

