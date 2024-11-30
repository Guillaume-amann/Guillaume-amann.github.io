// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open'); // Optional: toggling the menu
    resetSlider(); // Reset slider when hamburger is clicked
});

document.getElementById("mov").addEventListener("click", function () {
    window.location.href = "page2.html";
});

// Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100; // 100ms delay per item
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('ul.hidden li');
hiddenElements.forEach((el) => observer.observe(el));

// Slider functionality
let autoplayInterval = 4000;
let autoplayTimer = null;
let autoplay = false; // Initially false
let newIndex = 1;

function startAutoplay() {
    if (!autoplayTimer && autoplay) {
        autoplayTimer = setInterval(() => {
            newIndex++;
            navigateSlider();
        }, autoplayInterval);
    }
}

function stopAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
}

function resetSlider() {
    stopAutoplay();
    // Optionally restart autoplay if needed
    if (autoplay) {
        startAutoplay();
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

// Observer for div2
const div2 = document.getElementById('div2');

const divObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            autoplay = true; // Enable autoplay
            startAutoplay();
        } else {
            autoplay = false; // Disable autoplay
            stopAutoplay();
        }
    });
});

// Observe div2
divObserver.observe(div2);