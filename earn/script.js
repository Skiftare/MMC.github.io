document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clicker-button');
    const animationContainer = document.getElementById('animation-container');

    button.addEventListener('click', function() {
        // Добавляем класс при нажатии
        button.classList.add('clicker-button-pressed');


        // Виброотклик
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }

        // Создаем 5 анимационных элементов
        for (let i = 0; i < 5; i++) {
            createAnimatedElement();
        }
    });

    // Удаляем класс при окончании анимации
    button.addEventListener('animationend', function() {
        button.classList.remove('clicker-button-pressed');
    });

    function createAnimatedElement() {
        const element = document.createElement('div');
        element.classList.add('animated-element');

        // Устанавливаем случайные начальные позиции внутри верхнего полукруга
        const angle = Math.random() * Math.PI; // Угол от 0 до PI (верхний полукруг)
        const radius = Math.random() * 100; // Радиус от 0 до 100px
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        element.style.transform = translate(${x}px, ${y}px);

        animationContainer.appendChild(element);

        // Удаляем элемент после завершения анимации
        element.addEventListener('animationend', function() {
            element.remove();
        });
    }
});
