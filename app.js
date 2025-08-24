//Selección
const campo = document.getElementById("campo");

const agregar = document.getElementById("agregar");

const tareas = document.getElementById("lista-tareas");





//Agregar tarea
function insertarTarea() {

    event.preventDefault()
    //Creación de los elementos

const nuevoTexto = document.createElement("span");
nuevoTexto.classList.add("texto");

const nuevoBoton = document.createElement("button");
 nuevoBoton.textContent = "X";
 nuevoBoton.classList.add("eliminar");

const tareaNueva = document.createElement("li");
        //Anidando elementos...
tareaNueva.append(nuevoTexto, nuevoBoton);
tareaNueva.classList.add("lis");
    
            //Lógica

    if (campo.value === "") {
        campo.classList.add("error")
    } else {
        nuevoTexto.innerText = campo.value;
        campo.classList.remove("error")
        tareas.append(tareaNueva);   
    }
            //Eliminar tarea

         nuevoBoton.addEventListener("click", () => {
            tareaNueva.remove();
         }   )
    
}

agregar.addEventListener("click", insertarTarea);



 