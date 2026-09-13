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


// --- HERO SECTION SWIPER ---
// Premium 3D card transition using Swiper's built-in "creative" effect.
// Coming in  -> slides in from the right, rotated + scaled down + faded,
//               then settles to translateX(0) scale(1) rotate(0) opacity(1).
// Leaving    -> follows the swipe, rotates, scales down and fades out.
// Works for both swipe directions automatically (prev/next are mirrored).
// Respect the user's reduced-motion preference: no animated transition.
var heroSwiper = new Swiper(".hero-swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,

  effect: "creative",
  creativeEffect: {
    // Flat 2D card feel (no perspective depth) — matches the requested look
    perspective: false,
    limitProgress: 1,
    prev: {
      // Slide that is leaving to the LEFT / arriving from the left
      translate: ["-110%", 0, 0],
      rotate: [0, 0, -6],
      scale: 0.9,
      opacity: 0
    },
    next: {
      // Slide that is leaving to the RIGHT / arriving from the right
      translate: ["110%", 0, 0],
      rotate: [0, 0, 6],
      scale: 0.9,
      opacity: 0
    }
  },

  grabCursor: true,

  // Smooth, premium feel when the user swipes
  speed: 650,
  resistanceRatio: 0, // no edge resistance — dragging stays 1:1 with the finger
  followFinger: true, // slide tracks the pointer/finger in real time
  threshold: 5, // small threshold so a quick flick registers reliably
  longSwipesRatio: 0.25,
  longSwipesMs: 200,
  shortSwipes: true, // fast flicks advance a slide
  touchStartPreventDefault: false, // let vertical page scroll still work
  touchReleaseOnEdges: true, // release control on vertical scroll at edges

  // Accessible keyboard navigation (left / right arrows when focused)
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".hero-swiper-next",
    prevEl: ".hero-swiper-prev"
  },

    // Pagination dots
    pagination: {
      el: ".hero-swiper-pagination",
      clickable: true,
      dynamicBullets: false
    }
  });

  // If the visitor prefers reduced motion, remove the animated transition
  // (the carousel still changes slides, just instantly — no movement).
  if (typeof window !== "undefined" && window.matchMedia) {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var applyReducedMotion = function () {
      if (!heroSwiper || !heroSwiper.params) return;
      var instant = reduceMotion.matches;
      heroSwiper.params.speed = instant ? 0 : 650;
      if (heroSwiper.params.autoplay) {
        heroSwiper.params.autoplay.speed = instant ? 0 : 650;
      }
    };

    applyReducedMotion();
    if (reduceMotion.addEventListener) {
      reduceMotion.addEventListener("change", applyReducedMotion);
    }
  }

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
      0: { slidesPerView: 3 },
      480: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
    },
  });
}

/* ===== Create 3 sliders with opposite directions ===== */
createContinuousSwiper('.channels-slider-1', false, 6000); // right → left (speed: 6s)
createContinuousSwiper('.channels-slider-2', true, 6000);  // left → right
// Specific configuration for movies-slider to make images larger on phone devices
var moviesSwiper = new Swiper('.movies-slider', {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  allowTouchMove: true,
  speed: 6000,
  autoplay: {
    delay: 0,
    reverseDirection: false,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  grabCursor: true,
  breakpoints: {
    0: { slidesPerView: 2 }, // Changed from 3 to 2 for smaller screens
    480: { slidesPerView: 2 }, // Changed from 3 to 2 for smaller screens
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
  },
});


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

    /* ===== FAQ Accordion ===== */
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const question = faq.querySelector('.faq-question');
        const answer = faq.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isOpen = faq.classList.contains('active');

            // Close other open FAQs
            faqs.forEach(item => {
                if (item !== faq && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                    item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle the clicked FAQ
            faq.classList.toggle('active', !isOpen);
            question.setAttribute('aria-expanded', String(!isOpen));

            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
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
