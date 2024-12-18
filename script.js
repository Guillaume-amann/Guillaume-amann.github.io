// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open'); // Optional: toggling the menu
});

// Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 70; // 100ms delay per item
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('ul.hidden li');
hiddenElements.forEach((el) => observer.observe(el));

let isFlipped = false;

function flipImage() {
    const flipCard = document.querySelector('.flip-card');
    isFlipped = !isFlipped;
    flipCard.classList.toggle('active');
}

function downloadPDF() {
    const link = document.createElement('a');
    if (isFlipped) {
        link.href = 'docs/pdf/cvAMANN.pdf'; // PDF for the flipped side
        link.download = 'cv_FR.pdf';
        link.target = '_blank';
    } else {
        link.href = 'docs/pdf/ResumeAMANN.pdf'; // PDF for the front side
        link.download = 'cv_UK.pdf';
        link.target = '_blank';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function adjustViewportWidth() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
}

// Call on load and resize
window.addEventListener('load', adjustViewportWidth);
window.addEventListener('resize', adjustViewportWidth);