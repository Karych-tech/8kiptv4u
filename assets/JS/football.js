document.addEventListener('DOMContentLoaded', () => {
  const faqs = document.querySelectorAll('.faq-item');

  faqs.forEach((faq) => {
    const question = faq.querySelector('.faq-question');
    const answer = faq.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = faq.classList.contains('active');

      faqs.forEach((item) => {
        if (item !== faq && item.classList.contains('active')) {
          item.classList.remove('active');
          item.querySelector('.faq-answer').style.maxHeight = null;
          item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      faq.classList.toggle('active', !isOpen);
      question.setAttribute('aria-expanded', String(!isOpen));
      answer.style.maxHeight = isOpen ? null : `${answer.scrollHeight}px`;
    });
  });
});