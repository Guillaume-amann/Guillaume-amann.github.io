// Slide Functionality
const slides = document.querySelector('.slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;

function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.children.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < slides.children.length - 1) {
        currentSlide++;
        updateSlide();
    }
});

updateSlide();

// Mobile Dropdown Menu Functionality
const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show'); // Toggle the "show" class to display the menu
});