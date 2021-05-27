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
let user = document.getElementById('userField');
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

// Autocomplete Function
let users = ['John Stamos', 'Victoria Chambers', 'Josh Young', 'Jane Smith'];
let autocompleteUL = document.getElementById('autocomplete');
user.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
        autocompleteUL.style.display = 'block';
    //filters user array checking that input matches 
    let usersFound = users.filter(user => user.toLowerCase().includes(e.target.value));
    //creates an li element for each user found
    usersFound = usersFound.map(user => `<li>${user}</li>`);
    //uses conditional ternary operator to join li elements 
    let listHTML = !usersFound.length ? '' : usersFound.join('');
    autocompleteUL.innerHTML = listHTML;
    }
    else {
        autocompleteUL.style.display = 'none';
    }
})

autocompleteUL.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        user.value = e.target.textContent;
        autocompleteUL.style.display = 'none';
        
    }
})

////////////// Settings Section ///////////////
// Local Storage
//variables = save button, checkboxes, time zone
let save = document.getElementById('save');
let emailNotifications = document.getElementById('emails');
let publicProfile = document.getElementById('public');
let timeZone = document.getElementById('timezone');

//setting functions
function setCheckBox(checkbox, value) {
    if (checkbox.checked) {
        localStorage.setItem(value, 'on');
    }
    else {
        localStorage.setItem(value, 'off');
    }
}

function setTimeZone() {
    let timeZoneSelected = timeZone.value;
    localStorage.setItem('timeZone', timeZoneSelected);
}

//getting functions
function getTimeZone() {
    let selectedTimeZone = localStorage.getItem('timeZone');
    timeZone.value = selectedTimeZone;
}

//adds an event listener to the save button
save.addEventListener('click', () => {
    setCheckBox(emailNotifications, 'emailNotifications');
    setCheckBox(publicProfile, 'publicProfile');
    setTimeZone();
})

//conditionals check what is stored in local storage keys and adjusts buttons on refresh
if (localStorage.getItem('emailNotifications') === 'on') {
    emailNotifications.checked = true;
}

if (localStorage.getItem('publicProfile') === 'on') {
    publicProfile.checked = true;
}

getTimeZone();


// Clear Local settings
let cancel = document.getElementById('cancel');
//adds event listener to cancel button
cancel.addEventListener('click', () => {
    emailNotifications.checked = false;
    publicProfile.checked = false;
    timeZone.value = 'Select Timezone';
    localStorage.clear();
})



