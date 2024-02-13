function toggleQuestions() {
  var faqContainer = document.querySelector('.faq-container');
  var toggleButton = document.querySelector('.toggle-button');

  if (faqContainer.style.display === 'block') {
      faqContainer.style.display = 'none';
      toggleButton.innerText = 'бiльше питань';
  } else {
      faqContainer.style.display = 'block';
      toggleButton.innerText = 'менше питань';
  }
}

function toggleAnswer(answerId) {
  var answer = document.getElementById(answerId);
  if (answer.style.display === 'block') {
      answer.style.display = 'none';
  } else {
      answer.style.display = 'block';
  }
}


// // Добавляем слушатель события прокрутки
// window.addEventListener('scroll', function() {
//   // Получаем элементы faqContainer и toggleButton
//   var faqContainer = document.querySelector('.faq-container');
//   var toggleButton = document.querySelector('.toggle-button');

//   // Проверяем, открыты ли вопросы
//   if (faqContainer.style.display === 'block') {
//     // Если открыты, скрываем их
//     faqContainer.style.display = 'none';
//     toggleButton.innerText = 'бiльше питань';
//   }
// });

// // Функция для переключения отображения вопросов
// function toggleQuestions() {
//   var faqContainer = document.querySelector('.faq-container');
//   var toggleButton = document.querySelector('.toggle-button');

//   // Инвертируем отображение вопросов
//   if (faqContainer.style.display === 'block') {
//     faqContainer.style.display = 'none';
//     toggleButton.innerText = 'бiльше питань';
//   } else {
//     faqContainer.style.display = 'block';
//     toggleButton.innerText = 'менше питань';
//   }
// }

// // Функция для переключения отображения ответа на вопрос
// function toggleAnswer(answerId) {
//   var answer = document.getElementById(answerId);
//   if (answer.style.display === 'block') {
//     answer.style.display = 'none';
//   } else {
//     answer.style.display = 'block';
//   }
// }