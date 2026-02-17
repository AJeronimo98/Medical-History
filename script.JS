function agregarEvento(){
const fecha = document.getElementById("fechaEvento").value;
const desc = document.getElementById("descEvento").value;

if(!fecha || !desc) return;

const div = document.createElement("div");
div.className="evento";
div.innerHTML = "<b>"+fecha+"</b> - "+desc;

document.getElementById("timeline").appendChild(div);

document.getElementById("fechaEvento").value="";
document.getElementById("descEvento").value="";
}
