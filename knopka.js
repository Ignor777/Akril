// Функция для переключения темной и светлой темы
function toggleDarkMode() {
    // Переключаем класс 'dark-mode' у body
    document.body.classList.toggle('dark-mode');

    // Переключаем класс 'dark-mode' у других элементов, чтобы сохранить единый стиль
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('.button-link').forEach(function(button) {
        button.classList.toggle('dark-mode');
    });
    document.querySelectorAll('section').forEach(function(section) {
        section.classList.toggle('dark-mode');
    });
}
