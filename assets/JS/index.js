

// --- HERO SECTION SWIPER ---

var heroSwiper = new Swiper(".hero-swiper", {

  // Allow slides to be centered and sized automatically
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true, // Loop forever

  // Make slides move automatically
  autoplay: {
    delay: 2500, // Time between slide moves (2.5 seconds)
    disableOnInteraction: false // Keep autoplay running even if user drags
  },

  // Make slide movement slower and smoother
  speed: 1500, // Animation speed (1.5 seconds)

  // Keep your 3D-like effect
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,      // No rotation
    stretch: 0,     // No stretching
    depth: 100,     // Depth effect
    modifier: 2.5,  // Stronger effect
    slideShadows: false
  },

  grabCursor: true // Cursor turns to "grab" on desktop
});


/**
   * 🔧 Function to create a continuous infinite slider  3 sliders
   * @param {string} selector - CSS class of the swiper container
   * @param {boolean} reverse - true = moves left→right, false = right→left
   * @param {number} speed - how long (in ms) a full loop takes (higher = slower)
   */
function createContinuousSwiper(selector, reverse = false, speed = 6000) {
  return new Swiper(selector, {
    slidesPerView: 5,       // 🔧 Number of images visible at once
    spaceBetween: 10,       // 🔧 Space between images in pixels
    loop: true,             // Makes it infinite
    allowTouchMove: true,   // Allows manual swiping
    speed: speed,           // 🔧 Control scroll speed (higher = slower)
    autoplay: {
      delay: 0,             // 0 = continuous motion (no stops)
      reverseDirection: reverse,
      disableOnInteraction: false, // Keep moving after manual swipe
    },
    freeMode: true,         // Enables continuous scrolling
    freeModeMomentum: false,
    grabCursor: true,
    breakpoints: {          // 🔧 Responsive settings
      0: { slidesPerView: 2 },
      480: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
    },
  });
}

/* ===== Create 3 sliders with opposite directions ===== */
createContinuousSwiper('.slider-1', false, 6000); // right → left (speed: 6s)
createContinuousSwiper('.slider-2', true, 6000);  // left → right
createContinuousSwiper('.slider-3', false, 6000); // right → left


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
