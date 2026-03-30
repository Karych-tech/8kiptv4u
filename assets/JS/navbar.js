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
