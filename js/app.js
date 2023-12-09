//variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
  listaCursos.addEventListener("click", agregarCurso);
}

// Funciones
function agregarCurso(e) {
  // se utiliza por ejemplo href = # del enlace
  // prevenimos la accion por default
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    console.log("agregando al carrito");
    // asi se retrocede
    leerDatosCurso(cursoSeleccionado);
  }
  // se recomienda funciones cortas
}
// lee contenido html
function leerDatosCurso(curso) {
  console.log(curso);

  // crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src, //enlace
    titulo: curso.querySelector("h4").textContent, // texto
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"), //obtener atributo
    cantidad: 1,
  };

  // agrega elementos a arreglo de carrito, es como el i de for
  articulosCarrito = [...articulosCarrito, infoCurso];
  console.log(articulosCarrito);
  carritoHTML();
}

//Muestra el carrito de compras en el html

function carritoHTML() {
  // creara el html basado en el carrito de compras
  //* Limpiar el HTML
  limpiarHTML()
  //Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr"); // creas una etiqueta tr
    //Ingresas esto dentro del tr
    row.innerHTML = `
                <td> 
                    ${curso.titulo}
                
                </td>
            `;
    //Agregar el HTML del carrito en el tbody, agregamos cada row por cada iteracion
    contenedorCarrito.appendChild(row);

    //* AHORA FALTA ELIMNAR LOS CURSOS PREVIOS AL MOMENTO DE AGREGAR AL CARRITO
  });
}

// Elimina los cursos del tbody
function limpiarHTML(){
    // forma lenta
    // contenedorCarrito.innerHTML = '';

    //si tiene un almenos un elemento dentro
    //este codigo se sigue ejecutando
    //una ves el limpiado ya no se ejecuta
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}