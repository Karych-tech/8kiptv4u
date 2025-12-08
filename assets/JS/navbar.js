// NAVBAR TOGGLE  
const navbartoggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

if (navbartoggle && navbarMenu) {
  navbartoggle.addEventListener('click', () => {
    navbartoggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
      // Close menu if click is outside of the menu and the toggle button
      if (!navbarMenu.contains(e.target) && !navbartoggle.contains(e.target)) {
          navbarMenu.classList.remove('active');
          navbartoggle.classList.remove('active');
      }
  });
}
