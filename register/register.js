document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (!registerForm) return;

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Registering user:', { username, email, password });

        // --- Mock API Call ---
        // In a real application, you would send this data to a backend server
        // using fetch() or XMLHttpRequest.
        
        alert(`Registration successful for ${username}! (Check console for data)`);
        
        // Clear the form after successful submission
        registerForm.reset();
    });
});