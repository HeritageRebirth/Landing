// main.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Example of dynamic content update
    const serviceButtons = document.querySelectorAll('.service-button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceName = button.getAttribute('data-service');
            alert(`You selected the ${serviceName} service!`);
        });
    });
});