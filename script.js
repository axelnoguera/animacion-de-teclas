document.addEventListener("keydown", function(e){
  let tecla = e.key;

  function animacion(w,a,s,d,botonW,botonA,botonS,botonD) {

    switch(tecla){
        case "w" :
        botonW.classList.add("accion");
        w.style.color = "#eea63a";

        setTimeout(function(){
          botonW.classList.remove("accion");
          w.style.color = "#000";
        },500);
       break;


        case "a" : 
        botonA.classList.add("accion");
        a.style.color = "#bb0404";

        setTimeout(function(){
        botonA.classList.remove("accion");
        a.style.color = "#000";
        }, 500);
        break;


        case "s" :
        botonS.classList.add("accion");
        s.style.color = "#eea63a";
          
      
        setTimeout(function(){
          botonS.classList.remove("accion");
          s.style.color = "#000";
        }, 500);
        break;
 

        case "d" :
        botonD.classList.add("accion");
        d.style.color = "#eea63a";
      
        setTimeout(function(){
          botonD.classList.remove("accion");
          d.style.color = "#000";
        }, 500);
        break;
    };
      
  };


  animacion(document.querySelector(".w"),document.querySelector(".a"),document.querySelector(".s"),document.querySelector(".d"),document.querySelector(".boton-w"),document.querySelector(".boton-a"),document.querySelector(".boton-s"),document.querySelector(".boton-d"));

});
