// Navbar berubah saat scroll
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


// Animasi muncul saat discroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));


// Skill bisa diklik
const skills = document.querySelectorAll(".skill-item");

skills.forEach(skill => {
    skill.addEventListener("click", () => {
        skills.forEach(s => s.classList.remove("active"));
        skill.classList.add("active");
    });
});
