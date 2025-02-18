async function loadMarkdown(file, elementId){
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error("Arquivo não encontrado");
    const text = await response.text();
    document.getElementById(elementId).innerHTML = marked.parse(text);
  } catch (error) {
    document.getElementById(elementId).innerHTML = "<p>Erro ao carregar o arquivo.</p>";
    console.error(error);
  }
}