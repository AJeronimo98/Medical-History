function descargarPDF() {
  const elemento = document.querySelector(".pagina");
  
  // Forzamos el scroll al inicio para evitar cortes
  window.scrollTo(0, 0);

  const opciones = {
    margin: [10, 10, 10, 10], // Margen en mm
    filename: 'Historia_Clinica_Axel.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 3, 
      useCORS: true, 
      letterRendering: true,
      width: 794, // Ancho exacto para A4
      windowWidth: 794 
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait' 
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  // 1. Quitamos la sombra y centrado visual para la "foto"
  elemento.style.boxShadow = "none";
  elemento.style.margin = "0";

  html2pdf().set(opciones).from(elemento).save().then(() => {
    // 2. Restauramos el estilo para que en la web se siga viendo igual
    elemento.style.boxShadow = "0 0 14px rgba(0,0,0,0.18)";
    elemento.style.margin = "0 auto";
  });
}