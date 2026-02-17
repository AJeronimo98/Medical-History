function descargarPDF() {
  const elemento = document.querySelector(".pagina"); // Contenido completo

  const opciones = {
    margin: 10,               
    filename: 'Historia_Clinica.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['css', 'legacy'] } // rompe páginas automáticamente
  };

  html2pdf().set(opciones).from(elemento).save();
}
