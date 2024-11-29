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