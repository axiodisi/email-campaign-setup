document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var email = document.getElementById('email').value;
    
    var data = {
        email: email
    };
    
    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = 'Thank you for signing up!';
    })
    .catch(error => {
        document.getElementById('message').textContent = 'There was an error submitting your form.';
        console.error('Error:', error);
    });
});
