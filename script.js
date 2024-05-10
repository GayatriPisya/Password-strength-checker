const passwordInput = document.getElementById('password');
const showPassword = document.getElementById('showPassword');
const strengthDisplay = document.getElementById('strength');

showPassword.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPassword.classList.remove('fa-eye-slash');
    showPassword.classList.add('fa-eye');
  } else {
    passwordInput.type = 'password';
    showPassword.classList.remove('fa-eye');
    showPassword.classList.add('fa-eye-slash');
  }
});

passwordInput.addEventListener('input', () => {
  const value = passwordInput.value;
  let strength = 0;

  if (value.length > 0) {
    strength += 1;
  }

  if (value.length > 5) {
    strength += 1;
  }

  if (value.match(/[a-z]/) && value.match(/[A-Z]/)) {
    strength += 1;
  }

  if (value.match(/[0-9]/)) {
    strength += 1;
  }

  if (value.match(/[^a-zA-Z0-9]/)) {
    strength += 1;
  }

  strengthDisplay.textContent = `Strength: ${strength}/5`;

  if (strength === 5) {
    strengthDisplay.style.backgroundColor = '#4caf50';
  } else if (strength > 2) {
    strengthDisplay.style.backgroundColor = '#ff9800';
  } else {
    strengthDisplay.style.backgroundColor = '#f44336';
  }
});
