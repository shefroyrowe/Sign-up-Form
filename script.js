const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordMatchText = document.getElementById('password-match-text');

//validate password match
form.addEventListener('submit', (e) => {
    // form does not call out to server
    e.preventDefault();

    //get password input values
    let passwordValue = password.value;
    let conPasswordValue = confirmPassword.value;

    //add styles to password input fields
    if (conPasswordValue !== passwordValue) {
        password.className = 'redBorder';
        confirmPassword.className = 'redBorder';
        passwordMatchText.style.visibility = 'visible';
    }
})