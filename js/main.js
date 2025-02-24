// main.js

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    // Clear previous error messages
    document.getElementById('error-message').innerText = '';

    // Simple validation
    if (name === '' || email === '' || message === '') {
        valid = false;
        document.getElementById('error-message').innerText = 'All fields are required.';
    }

    // Email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email && !email.match(emailPattern)) {
        valid = false;
        document.getElementById('error-message').innerText = 'Please enter a valid email address.';
    }

    return valid;
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});