/* Smooth scroll */
function go(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

/* Navbar active highlight */
const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll(".navbar button");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });

  navButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick").includes(current)) btn.classList.add("active");
  });
});

/* Section fade-in animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

sections.forEach(sec => observer.observe(sec));

/* Pricing → Submit auto scroll */
function openForm(plan) {
  const select = document.getElementById("planSelect");
  if (select) {
    select.value = plan;
    document.getElementById("submit").scrollIntoView({ behavior: "smooth" });
  }
}

/* Submit form handler */
const form = document.getElementById("orderForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Project submitted successfully!");
    form.reset();
  });
}

/* Start page from top */
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};