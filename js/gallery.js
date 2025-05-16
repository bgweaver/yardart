// Initialize filtering functionality
document.addEventListener("DOMContentLoaded", function () {
  // Filter functionality
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Initialize - hide all non-birthday items on load
  document.querySelectorAll(".gallery-item").forEach((item) => {
    if (!item.classList.contains("birthday")) {
      item.style.display = "none";
    }
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");
      const items = document.querySelectorAll(".gallery-item");

      items.forEach((item) => {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Modal functionality
  const galleryImages = document.querySelectorAll(".gallery-img");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("imageModalLabel");

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      const imgSrc = this.getAttribute("src");
      const category = this.getAttribute("data-category");
      modalImage.setAttribute("src", imgSrc);

      // Set modal title based on category
      if (category === "birthday") {
        modalTitle.textContent = "Birthday Yard Sign";
      } else if (category === "graduation") {
        modalTitle.textContent = "Graduation Yard Sign";
      } else if (category === "business") {
        modalTitle.textContent = "Business Yard Sign";
      }

      // Show the modal
      const imageModal = new bootstrap.Modal(
        document.getElementById("imageModal")
      );
      imageModal.show();
    });
  });
});
