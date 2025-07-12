document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  if (!logoutBtn) return;

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    showToast('Logged out!');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1000);
  });
});
