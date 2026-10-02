// NAVBAR TOGGLE  
const navbartoggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

if (navbartoggle && navbarMenu) {
  navbartoggle.addEventListener('click', () => {
    navbartoggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });

  // Close menu when a link inside the menu is clicked
  navbarMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      navbarMenu.classList.remove('active');
      navbartoggle.classList.remove('active');
    }
  });

  document.addEventListener('click', (e) => {
      // Close menu if click is outside of the menu and the toggle button
      if (!navbarMenu.contains(e.target) && !navbartoggle.contains(e.target)) {
          navbarMenu.classList.remove('active');
          navbartoggle.classList.remove('active');
      }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const faqSections = document.querySelectorAll('.faq-section');

  faqSections.forEach((section) => {
    const faqItems = section.querySelectorAll('.faq, .faq-item');

    faqItems.forEach((faq) => {
      const question = faq.querySelector('.faq-question');
      const answer = faq.querySelector('.faq-answer');

      if (!question || !answer) return;

      question.addEventListener('click', () => {
        const isOpen = faq.classList.contains('active');

        faqItems.forEach((item) => {
          const itemQuestion = item.querySelector('.faq-question');
          const itemAnswer = item.querySelector('.faq-answer');
          if (!itemQuestion || !itemAnswer) return;

          item.classList.remove('active');
          itemQuestion.setAttribute('aria-expanded', 'false');
          itemAnswer.style.maxHeight = null;
        });

        if (!isOpen) {
          faq.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
      });
    });
  });
});
