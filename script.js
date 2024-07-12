document.addEventListener("DOMContentLoaded", function() {
    // Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (validateForm(name, email)) {
            alert('Form submitted successfully!');
            // Here you can add code to send the form data to the server
            form.reset();
        }
    });

    function validateForm(name, email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (name === '') {
            alert('Name is required.');
            return false;
        }

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    // Interactive Menu
    const menuItems = document.querySelectorAll('#menu li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const section = document.querySelector(item.getAttribute('href'));
            if (section) {
                document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
                section.style.display = 'block';
            }
        });
    });

    // Dynamic Content Update
    const dynamicContent = document.getElementById('dynamic-content');
    setInterval(() => {
        dynamicContent.innerHTML = <h1>Update</h1><p>Content updated at ${new Date().toLocaleTimeString()}</p>;
    }, 5000);
});
function sanitizeInput(input) {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = input;
    return tempDiv.innerHTML;
}
if (validateForm(sanitizeInput(name), sanitizeInput(email))) {
    alert('Form submitted successfully!');
    form.reset();
}