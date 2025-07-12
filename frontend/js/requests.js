document.addEventListener('DOMContentLoaded', () => {
  const cancelButtons = document.querySelectorAll('.cancel-request');
  cancelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showLoader();
      setTimeout(() => {
        hideLoader();
        showToast('Request cancelled.');
        btn.closest('.request-card').remove(); // remove card from DOM
      }, 1000);
    });
  });
});
