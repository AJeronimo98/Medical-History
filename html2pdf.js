function descargarPDF() {
  const elemento = document.querySelector(".pagina");
  window.scrollTo(0, 0);

  // Configuramos opciones que fuerzan el renderizado de gráficos
  const opciones = {
    margin: 10,
    filename: 'Historia_Clinica.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 3, 
      useCORS: true, 
      logging: false,
      allowTaint: true,
      // Esto es clave para los SVG
      foreignObjectRendering: false 
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Usamos el método .from().set().save() para mayor control
  html2pdf().set(opciones).from(elemento).save();
}