/* Section fade-in animation */
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

sections.forEach(sec => observer.observe(sec));

/* Submit form handler */
const form = document.getElementById("orderForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const service = document.getElementById("serviceSelect").value;
    const plan = document.getElementById("planSelect").value;
    alert(`Project Submitted!\nService: ${service}\nDuration: ${plan}`);
    form.reset();
  });
}

/* Start page from top */
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};