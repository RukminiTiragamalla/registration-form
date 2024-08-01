// Function to validate the registration form
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields are required.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Additional validation can be added here
});

// Function to toggle the visibility of the navigation menu
document.getElementById('menuButton').addEventListener('click', function() {
    const menu = document.getElementById('navMenu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
});

// Initial setup to hide the menu
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navMenu').style.display = 'none';
});
