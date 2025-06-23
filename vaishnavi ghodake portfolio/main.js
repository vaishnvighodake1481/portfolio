var typed= new Typed(".text", {
    strings: ["fresher","student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;

    // Function to apply theme and update button
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeToggleBtn.textContent = 'Dark Mode';
        } else {
            body.classList.remove('light-mode');
            themeToggleBtn.textContent = 'Light Mode';
        }
    };

    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Default to dark mode if no preference saved
        applyTheme('dark');
    }

    // Event listener for the toggle button
    themeToggleBtn.addEventListener('click', () => {
        let currentTheme;
        if (body.classList.contains('light-mode')) {
            // Switch to dark mode
            currentTheme = 'dark';
        } else {
            // Switch to light mode
            currentTheme = 'light';
        }
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.section-title-animate');

    if (animatedElements.length > 0) {
        const observerOptions = {
            root: null, // relative to document viewport
            rootMargin: '0px',
            threshold: 0.1 // trigger when 10% of the element is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        animatedElements.forEach(el => observer.observe(el));
    }
});