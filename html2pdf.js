function descargarPDF() {
  const elemento = document.querySelector(".pagina"); // Contenido completo

  const opciones = {
    margin: [10, 0, 10, 0], // margen superior, derecho, inferior, izquierdo
    filename: 'Historia_Clinica.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { 
      scale: 3,       // mayor resolución
      useCORS: true, 
      scrollX: 0,     // asegura captura desde esquina superior izquierda
      scrollY: 0,
      logging: true   // opcional: útil para depurar
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['css', 'legacy'] } // rompe páginas automáticamente
  };

  html2pdf().set(opciones).from(elemento).save();
}
