// Menú móvil
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const open = links.style.display === "flex";
      links.style.display = open ? "none" : "flex";
      links.style.position = "absolute";
      links.style.top = "76px";
      links.style.left = "0";
      links.style.right = "0";
      links.style.background = "#faf9f6";
      links.style.flexDirection = "column";
      links.style.padding = "20px 22px";
      links.style.borderBottom = "1px solid #e2e6e1";
      links.style.gap = "16px";
    });
  }

  // Año dinámico en el footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
