// Render drop down lists in sidebar
function setupDropdowns() {
  document.querySelectorAll("#sidebar h4").forEach(header => {
    let nextElement = header.nextElementSibling;
    while (nextElement && nextElement.tagName !== "UL" && nextElement.tagName !== "OL") {
      nextElement = nextElement.nextElementSibling;
  }
    if (nextElement) {
      nextElement.classList.add("dropdown-content");
      header.addEventListener("click", function () {
        nextElement.classList.toggle("open");						
      });
    }
  });
  // Show sidebar after dropdowns are ready
  document.getElementById("sidebar").classList.add("ready");
};