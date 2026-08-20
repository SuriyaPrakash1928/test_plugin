document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation
    if (username && password) {
        alert('Login Attempt Successful!\nUsername: ' + username);
        // In a real app, you would send this data to a server for authentication
    } else {
        alert('Please enter both username and password.');
    }
});