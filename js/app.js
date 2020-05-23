////////////// Alert Banner ///////////////

// Variables //
const alertBanner = document.getElementById('alert');

// Creates html for alert banner //
alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>5</strong> overdue tasks to complete.</p>
    <p class="alert-banner-close">X</p>
</div>
`

// Adds an event listener to the alert banner //
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.className === 'alert-banner-close') {
        alertBanner.style.display = 'none';
    }   
});

////////////// Messaging Section ///////////////

// Variables //
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

// Event Listener for send button
send.addEventListener('click', () => {
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields before sending');
    } else if (user.value === '') {
        alert('Please fill out the user field before sending');
    } else if (message.value === '') {
        alert('Please fill out the message field before sending');
    } else {
        alert('Message successfully sent to: ${user.value}');
    }
});