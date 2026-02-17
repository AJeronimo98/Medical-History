async function generarPDF() {

  const { jsPDF } = window.jspdf;

  const elemento = document.querySelector(".pagina");

  const canvas = await html2canvas(elemento, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff"
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = 210;
  const pageHeight = 297;

  const imgWidth = pageWidth;
  const imgHeight = canvas.height * imgWidth / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save("Historia_Clinica.pdf");
}


/* =========================
   ODONTOGRAMA SVG INTERACTIVO
   ========================= */

const estados = ["sano", "caries", "obturado", "ausente", "corona"];

document.querySelectorAll(".cara").forEach(cara => {

  cara.dataset.estado = "sano";

  cara.addEventListener("click", () => {

    let actual = cara.dataset.estado;
    let idx = estados.indexOf(actual);
    let siguiente = estados[(idx + 1) % estados.length];

    cara.classList.remove(actual);
    if (siguiente !== "sano") cara.classList.add(siguiente);

    cara.dataset.estado = siguiente;
  });

});
