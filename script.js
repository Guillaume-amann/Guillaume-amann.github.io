// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open'); // Optional: toggling the menu
    resetSlider(); // Reset slider when hamburger is clicked
});

// Slider functionality
let autoplayInterval = 4000;
let autoplayTimer = null;
let autoplay = true;
let newIndex = 1;

if (autoplay) {
    autoplayTimer = setInterval(function() {
        newIndex++;
        navigateSlider();
    }, autoplayInterval);
}

function resetSlider() {
    clearInterval(autoplayTimer);
    // Optionally restart autoplay if needed
    if (autoplay) {
        autoplayTimer = setInterval(function() {
            newIndex++;
            navigateSlider();
        }, autoplayInterval);
    }
}

function navigateSlider() {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const slide3 = document.getElementById('slide3');
    const slide4 = document.getElementById('slide4');
    
    if (newIndex === 1) {
        slide1.checked = true;
    } else if (newIndex === 2) {
        slide2.checked = true;
    } else if (newIndex === 3) {
        slide3.checked = true;
    } else if (newIndex === 4) {
        slide4.checked = true;
        newIndex = 0; // Reset to the first slide
    }
}

document.getElementById("mov").addEventListener("click", function () {
    window.location.href = "page2.html";
  });