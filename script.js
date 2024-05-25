let w = document.querySelector(".w");
let a = document.querySelector(".a"); 
let s = document.querySelector(".s"); 
let d = document.querySelector(".d");

let pw = document.querySelector(".pw"), pa = document.querySelector(".pa"), ps = document.querySelector(".ps"), pd = document.querySelector(".pd");

document.addEventListener("keydown", function (evento) {
  let tecla = evento.keyCode;

  if(tecla == 87){
    w.classList.add("accion");
    pw.style.color = "#eea63a";

    function accion(){
      w.classList.remove("accion");
      pw.style.color = "#000";
    };

    setTimeout(accion, 500);
  };

});


document.addEventListener("keydown", function (evento) {
  let tecla = evento.keyCode;
  if(tecla == 65){
    a.classList.add("accion");
    pa.style.color = "#bb0404";

    function accion(){
      a.classList.remove("accion");
      pa.style.color = "#000";

    };

    setTimeout(accion, 500);
  };

});


document.addEventListener("keydown", function (evento) {
  let tecla = evento.keyCode;
  if(tecla == 83){
    s.classList.add("accion");
    ps.style.color = "#eea63a";

    function accion(){
      s.classList.remove("accion");
      ps.style.color = "#000";
    };

    setTimeout(accion, 500);
  };

});


document.addEventListener("keydown", function (evento) {
  let tecla = evento.keyCode;
  if(tecla == 68){
    d.classList.add("accion");
    pd.style.color = "#eea63a";

    function accion(){
      d.classList.remove("accion");
      pd.style.color = "#000";
    };

    setTimeout(accion, 500);
  };

});


//w 87
//a 65
//s 83
//d 68