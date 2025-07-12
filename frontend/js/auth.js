document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form');
  if (!loginForm) return;

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const user = JSON.parse(localStorage.getItem('registeredUser'));

    showLoader();
    setTimeout(() => {
      hideLoader();

      if (!user || user.email !== email || user.password !== password) {
        showToast('Invalid email or password.');
      } else {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        showToast('Login successful!');
        window.location.href = 'profile.html';
      }
    }, 1000);
  });
});
function showLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(loader);
}