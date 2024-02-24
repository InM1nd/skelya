var modalBtns = [...document.querySelectorAll(".modal-toggle")];
modalBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).classList.add('active');
    document.body.style.overflow = 'hidden';
  }
});

var closeBtns = [...document.querySelectorAll(".modal-close")];
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

window.onclick = function(event) {
  console.log(event);
  if (event.target.className === "modal") {
    event.target.style.display = "none";
    document.body.style.overflow = '';
  }
}
