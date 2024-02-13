document.addEventListener('DOMContentLoaded', function () {
  // Добавить обработчики событий к кнопкам
  var buttons = document.querySelectorAll('.cases_list-item button');
  buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      showContent(index + 1);
    });
  });
});

function showContent(contentNumber) {
  // Скрыть весь контент
  hideAllContent();

  // Показать выбранный контент
  var contentId = "content" + contentNumber;
  document.getElementById(contentId).style.display = "block";
}

function hideAllContent() {
  // Скрыть весь контент
  var contents = document.querySelectorAll(".content-container div");
  contents.forEach(function (content) {
    content.style.display = "none";
  });
}