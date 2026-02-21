// ====== CONFIGURACION DE DIENTES Y ESTADOS ======
const arcadaSuperior = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
const arcadaInferior = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];

const estados = ["caries", "obturado", "corona", "ausente"];

// ====== CREACION DE CADA DIENTE ======
// Se añade el atributo xmlns para que el generador de PDF reconozca el SVG
function crearDiente(num) {
    return `
    <div class="diente">
        <svg viewBox="0 0 60 70" class="tooth" xmlns="http://www.w3.org/2000/svg">
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
function cargarOdontograma() {
    const cont = document.getElementById("odontograma");
    
    // Creamos dos filas para que se vea bien en el PDF
    let html = '<div class="fila-odontograma">';
    html += arcadaSuperior.map(d => crearDiente(d)).join("");
    html += '</div><div class="fila-odontograma">';
    html += arcadaInferior.map(d => crearDiente(d)).join("");
    html += '</div>';
    
    cont.innerHTML = html;

    // EVENTO PARA CLIC EN CADA CARA (Usando delegación de eventos para mayor eficiencia)
    cont.addEventListener("click", (e) => {
        if (e.target.classList.contains("sup")) {
            const el = e.target;
            let idx = estados.findIndex(est => el.classList.contains(est));
            
            // Ciclo de estados: ninguno -> caries -> obturado -> corona -> ausente -> ninguno
            if (idx === -1) {
                el.classList.add(estados[0]);
            } else if (idx === estados.length - 1) {
                el.classList.remove(...estados);
            } else {
                el.classList.remove(...estados);
                el.classList.add(estados[idx + 1]);
            }
        }
    });
}

// ====== FUNCION PDF MEJORADA ======
function descargarPDF() {
    const elemento = document.querySelector(".pagina");
    
    // Asegurar que el scroll no afecte la captura
    window.scrollTo(0, 0);

    const opciones = {
        margin: [10, 10, 10, 10],
        filename: 'Historia_Clinica_Odontologica.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 3, // Alta resolución
            useCORS: true, 
            logging: false,
            letterRendering: true,
            width: 794 // Forzar ancho de A4 en px
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };

    // Generar el PDF
    html2pdf().set(opciones).from(elemento).save();
}

// ====== INICIALIZAR ======
window.addEventListener("DOMContentLoaded", cargarOdontograma);