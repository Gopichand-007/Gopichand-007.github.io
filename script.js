document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    // Intersection Observer to detect when sections enter the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adding a class to trigger animation
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1 // 10% of the section must be visible to trigger animation
    });

    // Initial setup for sections before they enter the viewport
    sections.forEach(section => {
        section.classList.add("fade-in"); // Add a fade-in class
        observer.observe(section);
    });
});
