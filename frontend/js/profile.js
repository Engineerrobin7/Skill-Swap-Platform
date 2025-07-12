document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.querySelector('form');
  if (!profileForm) return;

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = profileForm.querySelector('input[placeholder="Full Name"]').value;
    const skillsOffered = profileForm.querySelector('input[placeholder*="Offer"]').value;
    const skillsWanted = profileForm.querySelector('input[placeholder*="Want"]').value;

    if (!name || !skillsOffered || !skillsWanted) {
      showToast('Please fill out required fields.');
      return;
    }

    showLoader();
    setTimeout(() => {
      hideLoader();
      showToast('Profile saved successfully!');
    }, 1000);
  });
});
