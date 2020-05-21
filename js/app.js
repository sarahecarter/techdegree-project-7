///// Alert Banner /////

// Variables //
const alertBanner = document.getElementById('alert');

// Creates html for alert banner //
alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>5</strong> overdue tasks to complete.</p>
    <p class="alert-banner-close">x</p>
</div>
`

// Adds an event listener to the alert banner //
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.className === 'alert-banner-close') {
        alertBanner.style.display = 'none';
    }   
});