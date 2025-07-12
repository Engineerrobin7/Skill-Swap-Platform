function showLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.id = 'global-loader';
  loader.style.position = 'fixed';
  loader.style.top = '50%';
  loader.style.left = '50%';
  loader.style.transform = 'translate(-50%, -50%)';
  loader.style.zIndex = 9999;
  document.body.appendChild(loader);
}

function hideLoader() {
  const loader = document.getElementById('global-loader');
  if (loader) loader.remove();
}
