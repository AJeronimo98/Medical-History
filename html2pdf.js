function descargarPDF() {
  const elemento = document.querySelector(".pagina"); // Div principal

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

    // Convertir tamaño de canvas de px a mm
    const imgWidth = canvas.width * 0.264583; // 1 px ≈ 0.264583 mm
    const imgHeight = canvas.height * 0.264583;

    // Centrar horizontalmente
    const x = (pdfWidth - imgWidth) / 2;
    const y = 10; // margen superior opcional

    pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
    pdf.save('Historia_Clinica.pdf');
  });
}
