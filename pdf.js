function descargarPDF(){

const elemento = document.getElementById("historia");

const opt = {
margin:       0,
filename:     'Historia_Clinica_Odontologica.pdf',
image:        { type: 'jpeg', quality: 1 },
html2canvas:  { scale: 2 },
jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

html2pdf().set(opt).from(elemento).save();

}
