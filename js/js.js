function datosEdad(elEvento){
    elEvento.preventDefault();

    var nombre = document.querySelector("#nombre").value;
    var fecha  = document.querySelector("#fecha").value;

    var bienvenida = document.querySelector("#bienvenida");

    if(fecha >= 2008){

        bienvenida.innerHTML ="Hola Niño ," + nombre;

    }else if(fecha >= 2004){
        
        bienvenida.innerHTML ="Hola Joven ," + nombre;
    
    }else{
        bienvenida.innerHTML ="Hola Señor ," + nombre;
    }

    }
var formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", datosEdad);