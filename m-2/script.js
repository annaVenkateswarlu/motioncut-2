document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const termsCheckbox = document.getElementById('terms');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const termsError = document.getElementById('termsError');
    const successMessage = document.getElementById('successMessage');
    const passwordStrength = document.getElementById('passwordStrength');

    usernameInput.addEventListener('input', validateUsername);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    termsCheckbox.addEventListener('change', validateTerms);

    function validateUsername() {
        const usernameValue = usernameInput.value.trim();
        if (usernameValue === '') {
            usernameError.textContent = 'Username is required';
        } else {
            usernameError.textContent = '';
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            emailError.textContent = 'Email is required';
        } else if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Invalid email format';
        } else {
            emailError.textContent = '';
        }
    }

    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        const passwordStrengthValue = calculatePasswordStrength(passwordValue);
        passwordStrength.textContent = `Password Strength: ${passwordStrengthValue}`;
        if (passwordValue === '') {
            passwordError.textContent = 'Password is required';
        } else if (passwordValue.length < 8) {
            passwordError.textContent = 'Password should be at least 8 characters';
        } else {
            passwordError.textContent = '';
        }
    }

    function calculatePasswordStrength(password) {
        const length = password.length;
        if (length < 8) {
            return 'Weak';
        } else if (length < 12) {
            return 'Medium';
        } else {
            return 'Strong';
        }
    }

    function validateTerms() {
        if (!termsCheckbox.checked) {
            termsError.textContent = 'Please accept the terms and conditions';
        } else {
            termsError.textContent = '';
        }
    }

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        validateUsername();
        validateEmail();
        validatePassword();
        validateTerms();

        if (!usernameError.textContent && !emailError.textContent && !passwordError.textContent && !termsError.textContent) {
           
            successMessage.textContent = 'Registration successful!';
            
        } else {
            successMessage.textContent = '';
        }
    });
});
