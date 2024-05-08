const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((faq) => {
  const faqHeader = faq.querySelector(".faq-header");

  faqHeader.addEventListener("click", () => {
    const openFaq = document.querySelector(".faq-open");

    toogleFaq(faq);

    if (openFaq && openFaq !== faq) {
      toogleFaq(openFaq);
    }
  });
});

const toogleFaq = (faq) => {
  const faqDescription = faq.querySelector(".faq-desp");

  if (faq.classList.contains("faq-open")) {
    faqDescription.removeAttribute("style");
    faq.classList.remove("faq-open");
  } else {
    faqDescription.style.height = faqDescription.scrollHeight + "px";
    faq.classList.add("faq-open");
  }
};