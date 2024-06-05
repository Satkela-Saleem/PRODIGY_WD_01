document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#666";
    } else {
      navbar.style.backgroundColor = "#000";
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      const hoverColorClass = `${this.getAttribute("data-hover-color")}-hover`;
      this.classList.add(hoverColorClass);
    });

    link.addEventListener("mouseout", function () {
      const hoverColorClass = `${this.getAttribute("data-hover-color")}-hover`;
      this.classList.remove(hoverColorClass);
    });
  });
});
