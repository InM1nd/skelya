window.addEventListener('scroll', function() {
  var header = document.getElementById('dynamicHeader');
  var heroSection = document.getElementById('hero');
  var servicesSection = document.getElementById('services');
  var spheresSection = document.getElementById('spheres');
  var workSection = document.getElementById('work');
  var formatSection = document.getElementById('format');
  var faqSection = document.getElementById('faq');
  var reviewsSection = document.getElementById('reviews');
  var talkSection = document.getElementById('talk');

  var scrollPosition = window.scrollY;

  if (scrollPosition < servicesSection.offsetTop) {
    header.innerHTML = '<div class="header_container container"><nav class="nav"><ul class="menu_list"><li class="menu_element"><a>Сервіси</a></li><li class="menu_element"><a>Про нас</a></li><li class="menu_element"><a>FAQ</a></li><li class="menu_element"><a>Відгуки</a></li><li class="menu_element"><a>Контакти</a></li></ul></nav></div>';
  } else if (scrollPosition < spheresSection.offsetTop) {
    header.innerHTML = '<div class="work_top container"><h3 class="work_title">сервіси</h3><img class="work_tick" src="./img/tick.png"></div>';
  } else if (scrollPosition < workSection.offsetTop) {
    header.innerHTML = '<div class="work_top container"><h3 class="work_title">сфери експертизи</h3><img class="work_tick" src="./img/tick.png"></div>';
  } else if (scrollPosition < formatSection.offsetTop) {
    header.innerHTML = '<div class="work_top container"><h3 class="work_title">як працюємо</h3><img class="work_tick" src="./img/tick.png"></div>';
  } else if (scrollPosition < faqSection.offsetTop) {
    header.innerHTML = '<div class="work_top container"><h3 class="work_title">формат</h3><img class="work_tick" src="./img/tick.png"></div>';
  } else if (scrollPosition < reviewsSection.offsetTop) {
    header.innerHTML = '<div class="work_top container"><h3 class="work_title">faq</h3><img class="work_tick" src="./img/tick.png"></div>';
  } else if (scrollPosition < talkSection.offsetTop) {
    header.innerHTML = '<div class="work_top container"><h3 class="work_title">відгуки</h3><img class="work_tick" src="./img/tick.png"></div>';
  } else {
    header.innerHTML = '<div class="work_top container"><h3 class="work_title">Контакти</h3><img class="work_tick" src="./img/tick.png"></div>';
  }
});


