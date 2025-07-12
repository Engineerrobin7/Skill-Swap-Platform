document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) return;

  document.querySelector('input[placeholder="Full Name"]').value = user.name;
  document.querySelector('input[placeholder="Location (optional)"]').value = "Auto-filled";
});
document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.querySelector('form');
  if (!profileForm) return;

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = profileForm.querySelector('input[placeholder="Full Name"]').value;
    const location = profileForm.querySelector('input[placeholder="Location (optional)"]').value;

    if (!name) {
      showToast('Please fill your name.');
      return;
    }

    // Save to localStorage (mock database)
    const user = { name, location };
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    showLoader();
    setTimeout(() => {
      hideLoader();
      showToast('Profile updated successfully!');
      window.location.href = 'profile.html';
    }, 1000);
  });
});
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
function showLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(loader);
}
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
document.addEventListener('DOMContentLoaded', () => {
  const availabilitySelect = document.querySelector('select');
  if (availabilitySelect) {
    availabilitySelect.addEventListener('change', () => {
      const selectedValue = availabilitySelect.value;
      if (selectedValue) {
        showToast(`Selected availability: ${selectedValue}`);
        // Implement actual logic based on selected value
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.querySelector('form');
  if (!profileForm) return;

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = profileForm.querySelector('input[placeholder="Full Name"]').value;
    const location = profileForm.querySelector('input[placeholder="Location (optional)"]').value;

    if (!name) {
      showToast('Please fill your name.');
      return;
    }

    // Save to localStorage (mock database)
    const user = { name, location };
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    showLoader();
    setTimeout(() => {
      hideLoader();
      showToast('Profile updated successfully!');
      window.location.href = 'profile.html';
    }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) return;

  document.querySelector('input[placeholder="Full Name"]').value = user.name;
  document.querySelector('input[placeholder="Location (optional)"]').value = user.location || '';
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
document.addEventListener('DOMContentLoaded', () => {
  const availabilitySelect = document.querySelector('select');
  if (availabilitySelect) {
    availabilitySelect.addEventListener('change', () => {
      const selectedValue = availabilitySelect.value;
      if (selectedValue) {
        showToast(`Selected availability: ${selectedValue}`);
        // Implement actual logic based on selected value
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.querySelector('form');
  if (!profileForm) return;

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = profileForm.querySelector('input[placeholder="Full Name"]').value;
    const location = profileForm.querySelector('input[placeholder="Location (optional)"]').value;

    if (!name) {
      showToast('Please fill your name.');
      return;
    }

    // Save to localStorage (mock database)
    const user = { name, location };
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    showLoader();
    setTimeout(() => {
      hideLoader();
      showToast('Profile updated successfully!');
      window.location.href = 'profile.html';
    }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) return;

  document.querySelector('input[placeholder="Full Name"]').value = user.name;
  document.querySelector('input[placeholder="Location (optional)"]').value = user.location || '';
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
document.addEventListener('DOMContentLoaded', () => {
  const availabilitySelect = document.querySelector('select');
  if (availabilitySelect) {
    availabilitySelect.addEventListener('change', () => {
      const selectedValue = availabilitySelect.value;
      if (selectedValue) {
        showToast(`Selected availability: ${selectedValue}`);
        // Implement actual logic based on selected value
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.querySelector('form');
  if (!profileForm) return;

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = profileForm.querySelector('input[placeholder="Full Name"]').value;
    const location = profileForm.querySelector('input[placeholder="Location (optional)"]').value;

    if (!name) {
      showToast('Please fill your name.');
      return;
    }

    // Save to localStorage (mock database)
    const user = { name, location };
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    showLoader();
    setTimeout(() => {
      hideLoader();
      showToast('Profile updated successfully!');
      window.location.href = 'profile.html';
    }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) return;

  document.querySelector('input[placeholder="Full Name"]').value = user.name;
  document.querySelector('input[placeholder="Location (optional)"]').value = user.location || '';
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

document.addEventListener('DOMContentLoaded', () => {
  const availabilitySelect = document.querySelector('select');
  if (availabilitySelect) {
    availabilitySelect.addEventListener('change', () => {
      const selectedValue = availabilitySelect.value;
      if (selectedValue) {
        showToast(`Selected availability: ${selectedValue}`);
        // Implement actual logic based on selected value
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.querySelector('form');
  if (!profileForm) return;

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = profileForm.querySelector('input[placeholder="Full Name"]').value;
    const location = profileForm.querySelector('input[placeholder="Location (optional)"]').value;

    if (!name) {
      showToast('Please fill your name.');
      return;
    }

    // Save to localStorage (mock database)
    const user = { name, location };
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    showLoader();
    setTimeout(() => {
      hideLoader();
      showToast('Profile updated successfully!');
      window.location.href = 'profile.html';
    }, 1000);
  });
});