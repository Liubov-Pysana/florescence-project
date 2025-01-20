const faqQuestions = document.querySelectorAll('.faq-question');
const faqItemActive = document.querySelectorAll('.faq-item.active');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;

    faqItemActive.forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });

    faqItem.classList.toggle('active');
  });
});