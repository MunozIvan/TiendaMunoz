import {arrayProductos} from "./productos.js";
import {botonComprar} from "./funciones/comprar.js"


function calcCuotas (precio, cuotas){ //valores de ejemplo
    if(cuotas==1){
        return precio
    }
    else if(cuotas==3){
        precio= precio*1.1
        return precio
    }
    else if(cuotas==6){
        precio= precio*1.25
        return precio
    }
    else if(cuotas==12){
        precio= precio*1.5
        return precio
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////
//      CREACIÓN DE CARDS   

export function crearCards (arrayCards,divPadre){
    divPadre.innerHTML = ""
    arrayCards.forEach(productoEnArray => {
        divPadre.innerHTML += `
        <div id="${productoEnArray.tipo}${productoEnArray.id}" class="card mb-3 producto">
            <img src="${productoEnArray.foto}" class="card-img-top imagen" alt=${productoEnArray.tipo}>
            <div class="card-body descripcion">
                <h5 class="card-title">$${productoEnArray.precio}</h5>
                <p class="card-text">${productoEnArray.modelo}</p>
                <button id="comprar${productoEnArray.id}" type="button" class="btn btn-info">Comprar</button>
            </div>
        </div>
        `   
    })
}


//const paginicio = document.getElementById("inicio")
const cartasProductos = document.getElementById("cartasProductos")
//paginicio.onclick =crearCards(arrayProductos,cartasProductos)

document.body.onload = crearCards(arrayProductos,cartasProductos)


//////////////////////////////////////////////////////////////////////////////////////////////////

//   EVENTOS - AGREGAR AL CARRITO


botonComprar(arrayProductos)



//////////////////

//   EVENTOS - FILTRO BUSCADOR 

let buscadorPrductos = document.getElementById("formBuscador")
let titulo = document.querySelector(".titulo")
let division = document.querySelector(".division")
buscadorPrductos.addEventListener('input', () => {
   //console.log(buscadorPrductos.value)
   if(buscadorPrductos.value != ""){
    titulo.innerText= `Mostrando productos resultados relacionados con "${buscadorPrductos.value}"`;
    division.innerText= ""
   }
   crearCards(arrayProductos.filter(producto => producto.modelo.includes(buscadorPrductos.value.toUpperCase()) || producto.marca.includes(buscadorPrductos.value.toUpperCase())),cartasProductos)
   botonComprar(arrayProductos.filter(producto => producto.modelo.includes(buscadorPrductos.value.toUpperCase()) || producto.marca.includes(buscadorPrductos.value.toUpperCase())))

})












