document.addEventListener('DOMContentLoaded', () => {
  const swapForm = document.querySelector('form');
  if (!swapForm) return;

  swapForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const offer = swapForm.querySelector('input[placeholder*="Your Skill"]').value;
    const want = swapForm.querySelector('input[placeholder*="Want"]').value;

    if (!offer || !want) {
      showToast('Please enter both skills.');
      return;
    }

    showLoader();
    setTimeout(() => {
      hideLoader();
      showToast('Swap request sent!');
      swapForm.reset();
    }, 1000);
  });
});
