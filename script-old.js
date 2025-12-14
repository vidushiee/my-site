document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");
  
    // Smooth scrolling
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
  
        // Update active link
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  
    // Highlight active link on scroll
    window.addEventListener("scroll", () => {
      let currentSection = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });
  });
  