document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var sequenceName = document.getElementById('sequenceName').value;
    var email = document.getElementById('email').value;
    var interval = document.getElementById('interval').value;
    var subject = document.getElementById('subject').value;
    var body = document.getElementById('body').value;
    
    var data = {
        sequenceName: sequenceName,
        email: email,
        interval: interval,
        subject: subject,
        body: body
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
        document.getElementById('message').textContent = 'Email scheduled successfully!';
    })
    .catch(error => {
        document.getElementById('message').textContent = 'There was an error scheduling your email.';
        console.error('Error:', error);
    });
});
