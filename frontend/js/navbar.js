const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (
  !user &&
  !window.location.pathname.includes('login') &&
  !window.location.pathname.includes('register')
) {
  window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const greet = document.getElementById('greeting');
  if (user && greet) {
    greet.innerText = `Hi, ${user.name.split(' ')[0]}`;
  }
});
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
document.addEventListener('DOMContentLoaded', () => {
  const profileLink = document.getElementById('profileLink');
  if (!profileLink) return;

  profileLink.addEventListener('click', (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      window.location.href = 'profile.html';
    } else {
      showToast('Please log in to access your profile.');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1000);
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('input[placeholder="Search skills..."]');
  const searchButton = document.querySelector('button');

  if (searchInput && searchButton) {
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        showToast(`Searching for "${query}"...`);
        // Implement actual search logic here
      } else {
        showToast('Please enter a skill to search.');
      }
    });
  }
});
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}