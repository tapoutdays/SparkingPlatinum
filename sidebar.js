// Render drop down lists in sidebar
function setupDropdowns() {
  document.querySelectorAll("#sidebar h4").forEach(header => {
      let nextElement = header.nextElementSibling;

      // Search for UL and OL after H4
      while (nextElement && nextElement.tagName !== "UL" && nextElement.tagName !== "OL") {
          nextElement = nextElement.nextElement;
      }

      // Add icon and click event if it finds UL or OL
      if (nextElement) {
          nextElement.classList.add("dropdown-content");

          // Create dropdown icon
          let icon = document.createElement("div");
          icon.classList.add("dropdown-icon");
          icon.innerHTML = "&#9662;"; // ▼ Unicode
          header.appendChild(icon); // Add icon to H4

          header.addEventListener("click", function () {
              nextElement.classList.toggle("open");
              icon.classList.toggle("open"); // Spin the icon
          });
      }
  });
}