var modalBtns = [...document.querySelectorAll(".modal-toggle")];
modalBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');
    var modalElement = document.getElementById(modal);
    modalElement.classList.add('active');
    modalElement.style.overflowY = 'hidden'; // Предотвращение прокрутки по вертикали
    document.body.style.overflow = 'hidden';
  }
});

var closeBtns = [...document.querySelectorAll(".modal_close")];
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.modal');
    modal.classList.remove('active');
    modal.style.overflowY = ''; // Восстановление прокрутки по вертикали
    document.body.style.overflow = '';
  }
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
    event.target.style.overflowY = ''; // Восстановление прокрутки по вертикали
    document.body.style.overflow = '';
  }
}