const dientes = [
18,17,16,15,14,13,12,11,
21,22,23,24,25,26,27,28,
48,47,46,45,44,43,42,41,
31,32,33,34,35,36,37,38
];

const estados = ["caries","obturado","corona","ausente",""];

function crearDiente(num){
  return `
  <div class="diente" data-diente="${num}">
    <svg viewBox="0 0 60 70" class="tooth">

      <path class="sup vestibular" d="M30 2 C45 2 55 12 52 24 L30 28 L8 24 C5 12 15 2 30 2Z"/>
      <path class="sup mesial" d="M8 24 L30 28 L30 45 L12 40 C8 36 6 30 8 24Z"/>
      <rect class="sup oclusal" x="20" y="28" width="20" height="17" rx="4"/>
      <path class="sup distal" d="M52 24 L30 28 L30 45 L48 40 C52 36 54 30 52 24Z"/>
      <path class="sup lingual" d="M12 40 L30 45 L48 40 C42 60 18 60 12 40Z"/>

    </svg>
    <span class="num">${num}</span>
  </div>`;
}

function cargarOdontograma(){
  const cont = document.getElementById("odontograma");
  cont.innerHTML = dientes.map(d=>crearDiente(d)).join("");

  document.querySelectorAll(".sup").forEach(el=>{
    el.addEventListener("click", ()=>{
      let actual = estados.findIndex(c=>el.classList.contains(c));
      el.classList.remove(...estados);
      el.classList.add(estados[(actual+1)%estados.length]);
    });
  });
}

window.addEventListener("DOMContentLoaded", cargarOdontograma);
