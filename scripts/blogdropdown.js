document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    dropdownToggle.addEventListener("click", function(event) {
      event.preventDefault();
      dropdownMenu.classList.toggle("show");
    });
  
    document.addEventListener("click", function(event) {
      if (!event.target.closest(".dropdown-toggle") &&!event.target.closest(".dropdown-menu")) {
        dropdownMenu.classList.remove("show");
      }
    });
  });