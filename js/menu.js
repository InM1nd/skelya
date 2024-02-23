document.getElementById('toggleBtn').addEventListener('click', function() {
  document.getElementById('menu').classList.toggle('active');
  document.body.style.overflow = 'hidden';
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('menu').classList.remove('active');
  document.body.style.overflow = '';
});

