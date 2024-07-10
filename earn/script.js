document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clicker-button');
    const animationContainer = document.getElementById('animation-container');

    button.addEventListener('click', function(event) {
        button.classList.add('clicker-button-pressed');

        if (navigator.vibrate) {
            navigator.vibrate(100);
        }

        const rect = button.getBoundingClientRect();
        const angle = Math.random() * (Math.PI / 3) - Math.PI / 6; // От -30 до +30 градусов
        const distance = 100 + Math.random() * 200;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        for (let i = 0; i < 5; i++) {
            createAnimatedElement(x, y);
        }
    });

    button.addEventListener('animationend', function() {
        button.classList.remove('clicker-button-pressed');
    });

    function createAnimatedElement(clickX, clickY) {
        /*const element = document.createElement('div');
        const shapes = ['circle', 'square', 'triangle'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        element.classList.add('animated-element', shape);

        // Определяем случайный угол в верхней трети окружности
        const angle = Math.random() * (Math.PI / 3) - Math.PI / 6; // От -30 до +30 градусов
        const distance = 100 + Math.random() * 200;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        element.style.transform = `translate(${clickX}px, ${clickY}px)`;
        animationContainer.appendChild(element);

        setTimeout(() => {
            element.style.transform = `translate(${clickX + x}px, ${clickY - Math.abs(y)}px)`;
            element.style.opacity = '0'; // Элемент исчезает при завершении анимации
        }, 10);

        element.addEventListener('transitionend', function() {
            element.remove();
        });*/
    }
});