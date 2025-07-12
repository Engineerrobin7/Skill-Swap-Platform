document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('form');
  if (!registerForm) return;

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = registerForm.querySelector('input[placeholder="Your name"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]:nth-of-type(1)').value;
    const confirm = registerForm.querySelector('input[type="password"]:nth-of-type(2)').value;

    if (!name || !email || !password || !confirm) {
      showToast('Please fill all fields.');
      return;
    }
    if (password !== confirm) {
      showToast('Passwords do not match.');
      return;
    }

    // Save to localStorage (mock database)
    const user = { name, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(user));

    showLoader();
    setTimeout(() => {
      hideLoader();
      showToast('Registration successful!');
      window.location.href = 'login.html';
    }, 1000);
  });
});
