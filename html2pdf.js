function descargarPDF() {
  const elemento = document.querySelector(".pagina"); // Contenido completo

  html2canvas(elemento, {
    scale: 3,
    useCORS: true,
    scrollX: 0,
    scrollY: 0
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    const pdf = new jsPDF({
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // dimensiones del canvas en mm
    const imgProps = {
      width: canvas.width * 0.264583, // px a mm
      height: canvas.height * 0.264583
    };

    // posición X para centrar
    const x = (pdfWidth - imgProps.width) / 2;
    const y = 10; // margen superior

    pdf.addImage(imgData, 'JPEG', x, y, imgProps.width, imgProps.height);
    pdf.save('Historia_Clinica.pdf');
  });
}
