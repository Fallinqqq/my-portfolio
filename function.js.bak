document.addEventListener("DOMContentLoaded", function () {
    // Initialize TypeIt
    new TypeIt(".name", {
        strings: ["Grace Foster", "Front-End Developer"],
        speed: 100,
        loop: true,
        waitUntilVisible: true,
        breakLines: false
    }).go();

    // Update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu handling
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });
    }
});

