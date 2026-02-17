function descargarPDF(){

const elemento = document.getElementById("documento");

const opciones = {
margin:10,
filename:"Historia_Clinica_Odontologica.pdf",
image:{type:"jpeg", quality:1},
html2canvas:{scale:2},
jsPDF:{unit:"mm", format:"letter", orientation:"portrait"}
};

html2pdf().set(opciones).from(elemento).save();

}

