document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.getElementById('greetButton');
    const messageElement = document.getElementById('message');

    greetButton.addEventListener('click', () => {
        messageElement.textContent = 'Hello! You successfully interacted with the plugin.';
    });
});