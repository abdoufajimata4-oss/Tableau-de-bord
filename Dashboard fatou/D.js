// Sélection du bouton et du dashboard
const menuToggle = document.querySelector(".menu-toggle");
const dashboardContainer = document.querySelector(".dashboard-container");

// Si le bouton existe
if (menuToggle && dashboardContainer) {
  menuToggle.addEventListener("click", function () {
    dashboardContainer.classList.toggle("sidebar-open");
  });
}
