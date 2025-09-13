// ✅ Toggle main menu visibility
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".dropbtn");
  const dropdownMenu = document.querySelector(".dropdown-content");

  if (menuButton && dropdownMenu) {
    menuButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent click bubbling
      dropdownMenu.classList.toggle("hidden");
    });

    // ✅ Hide menu if clicking outside
    document.addEventListener("click", function (e) {
      if (!dropdownMenu.contains(e.target) && !menuButton.contains(e.target)) {
        dropdownMenu.classList.add("hidden");
      }
    });
  }

});
