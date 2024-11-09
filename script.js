// Smooth scroll for internal links with a smoother effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        let startPosition = window.pageYOffset;
        let targetPosition = target.getBoundingClientRect().top;
        let startTime = null;
        const duration = 1000; // Increase duration for smoother scroll (1000ms = 1 second)

        function smoothScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(smoothScroll);
        }

        // Ease-in-out function for smoother scroll
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(smoothScroll);
    });
});

// Change navbar background color on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(78, 84, 200, 0.9)';
    } else {
        navbar.style.background = 'linear-gradient(90deg, #4e54c8, #8f94fb)';
    }
});
window.onscroll = function() {
    var navbar = document.querySelector('.nav__bar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
