function setMainContainerHeight() {
  const mainContainer = document.querySelector('.hero');
  if (mainContainer) {
      mainContainer.style.height = `${window.innerHeight}px`;
  }
}

window.addEventListener('DOMContentLoaded', setMainContainerHeight);
window.addEventListener('resize', setMainContainerHeight);