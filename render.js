/* async function loadMarkdown(file, elementId){
    try {
    const response = await fetch(file);
    if (!response.ok) throw new Error("Arquivo não encontrado");
    const text = await response.text();
    document.getElementById(elementId).innerHTML = marked.parse(text);
  } catch (error) {
    document.getElementById(elementId).innerHTML = "<p>Erro ao carregar o arquivo.</p>";
    console.error(error);
  }
} */

function fetchMarkdown(file) {
  return fetch(file)
    .then(response => response.text())
    .then(markdown => convertMarkdownToHTML(markdown)); // Converts to HTML
}

function convertMarkdownToHTML(markdown) {
  return marked.parse(markdown); // Uses marked.js library to parse markdown to HTML
}

function renderPage() {
  let sidebarPromise = fetchMarkdown("wiki/sidebar.md"); // Sidebar
  let contentPromise = fetchMarkdown("wiki/home.md"); // Main content

  // Loads all markdown files at the same time and only renders page when everything is ready
  Promise.all([sidebarPromise, contentPromise]).then(([sidebarHTML, contentHTML]) => {
    document.getElementById("sidebar").innerHTML = sidebarHTML;
    document.getElementById("content").innerHTML = contentHTML;

    // Once everything loads, initialize sidebar dropdowns
    setupDropdowns();

    // Once everything loads and dropdowns are ready, enable visibilithy on eveyrhting
    document.body.classList.add("loaded");
  });
}
