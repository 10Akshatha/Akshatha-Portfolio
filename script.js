document.addEventListener("mousemove", function (event) {
    document.documentElement.style.setProperty(
        "--mouse-x",
        event.clientX + "px"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        event.clientY + "px"
    );
});
/* ---------- Scroll Reveal ---------- */

const revealElements = document.querySelectorAll(
    ".section-content, .skill-card, .project-card, .experience-card, .training-card, .education-card"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    observer.observe(element);
});