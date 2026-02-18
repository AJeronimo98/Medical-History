// ====== CONFIGURACION DE DIENTES Y ESTADOS ======
const dientes = [
  18,17,16,15,14,13,12,11,
  21,22,23,24,25,26,27,28,
  48,47,46,45,44,43,42,41,
  31,32,33,34,35,36,37,38
];

const estados = ["caries", "obturado", "corona", "ausente"]; // sin el "" inicial

// ====== CREACION DE CADA DIENTE ======
function crearDiente(num){
  return `
  <div class="diente">
    <svg viewBox="0 0 60 70" class="tooth">
      <path class="sup" d="M30 2 C45 2 55 12 52 24 L30 28 L8 24 C5 12 15 2 30 2Z"/>
      <path class="sup" d="M8 24 L30 28 L30 45 L12 40 C8 36 6 30 8 24Z"/>
      <rect class="sup" x="20" y="28" width="20" height="17" rx="4"/>
      <path class="sup" d="M52 24 L30 28 L30 45 L48 40 C52 36 54 30 52 24Z"/>
      <path class="sup" d="M12 40 L30 45 L48 40 C42 60 18 60 12 40Z"/>
    </svg>
    <span class="num">${num}</span>
  </div>
  `;
}

// ====== CARGAR ODONTOGRAMA ======
function cargarOdontograma(){
  const cont = document.getElementById("odontograma");
  cont.innerHTML = dientes.map(d=>crearDiente(d)).join("");

  // EVENTO PARA CLIC EN CADA CARA
  document.querySelectorAll(".sup").forEach(el=>{
    el.addEventListener("click", ()=>{
      // obtener índice del estado actual
      let idx = estados.findIndex(e => el.classList.contains(e));
      // si no tiene estado, empieza en 0
      idx = idx === -1 ? 0 : (idx + 1) % estados.length;
      // limpiar clases anteriores y agregar nueva
      el.classList.remove(...estados);
      el.classList.add(estados[idx]);
    });
  });
}

// ====== PDF ======
function descargarPDF() {
  const elemento = document.querySelector(".pagina");
  window.scrollTo(0,0); // asegurar que capture toda la página

  const opciones = {
  margin: [10, 0, 10, 0], // margen superior, derecho, inferior, izquierdo
  filename: 'Historia_Clinica.pdf',
  image: { type: 'jpeg', quality: 1 },
  html2canvas: { scale: 3, useCORS: true, logging: true, scrollX: 0, scrollY: 0 },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  pagebreak: { mode: ['css', 'legacy'] }
};

  html2pdf().set(opciones).from(elemento).save();
}

// ====== INICIALIZAR ======
window.addEventListener("DOMContentLoaded", cargarOdontograma);
