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


// --- HERO SECTION SWIPER ---
var heroSwiper = new Swiper(".hero-swiper", {

  
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true, 
  autoplay: {
    delay: 2500, 
    disableOnInteraction: false, 
    pauseOnMouseEnter: true 
  },

  
  speed: 1500,

  
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,   
    stretch: 0,     
    depth: 100,     
    modifier: 2.5, 
    slideShadows: false
  },

  grabCursor: true 
});



// --- CONTINUOUS INFINITE SLIDERS channles and movie ---
/**
   * @param {string} selector 
   * @param {boolean} reverse 
   * @param {number} speed 
   */
function createContinuousSwiper(selector, reverse = false, speed = 6000) {
  return new Swiper(selector, {
    slidesPerView: 5,       
    spaceBetween: 10,       
    loop: true,             
    allowTouchMove: true,   
    speed: speed,           
    autoplay: {
      delay: 0,            
      reverseDirection: reverse,
      disableOnInteraction: false, 
    },
    freeMode: true,        
    freeModeMomentum: false,
    grabCursor: true,
    breakpoints: {          
      0: { slidesPerView: 2 },
      480: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
    },
  });
}

/* ===== Create 3 sliders with opposite directions ===== */
createContinuousSwiper('.channels-slider-1', false, 6000); // right → left (speed: 6s)
createContinuousSwiper('.channels-slider-2', true, 6000);  // left → right
createContinuousSwiper('.movies-slider', false, 6000); // right → left


// pricing panels 
// Wait for the full HTML document to be loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

    // Get all the switch buttons (Standard, Premium)
    const switchButtons = document.querySelectorAll('.switch-button');
    
    // Get all the content panels (the containers for the 3 cards)
    const pricingPanels = document.querySelectorAll('.pricing-panel');

    // Add a click event listener to each switch button
    switchButtons.forEach(button => {
        button.addEventListener('click', () => {

            // 1. Get the ID of the panel we want to show from the button's 'data-target' attribute
            const targetPanelId = button.getAttribute('data-target');

            // 2. Remove 'active' class from ALL buttons
            switchButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 3. Add 'active' class to the button that was just clicked
            button.classList.add('active');

            // 4. Hide all pricing panels
            pricingPanels.forEach(panel => {
                panel.classList.remove('active');
            });

            // 5. Show the target panel by finding it by its ID and adding the 'active' class
            document.getElementById(targetPanelId).classList.add('active');
        });
});

});




// Feedback Swiper
var feedbackSwiper = new Swiper(".feedback-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});


/* ===== faq-question===== */
const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});
