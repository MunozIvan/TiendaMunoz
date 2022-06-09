import{crearCards} from "./crearCards.js"
import {botonComprar} from "./botonComprar.js"
import {arrayProductos} from "../productos.js"
import {arrayProductosFetch} from"./fetch.js"


//   EVENTOS - FILTRO BUSCADOR 

let buscadorPrductos = document.getElementById("formBuscador")
let titulo = document.querySelector(".titulo")
let division = document.querySelector(".division")
export const cartasProductos = document.getElementById("cartasProductos")

export function buscador(){
    buscadorPrductos.addEventListener('input', () => {
        //console.log(buscadorPrductos.value)
        if(buscadorPrductos.value != null){
         titulo.innerText= `Mostrando productos resultados relacionados con "${buscadorPrductos.value}"`;
         division.innerText= ""
        }
        crearCards(arrayProductosFetch.filter(producto => producto.modelo.includes(buscadorPrductos.value.toUpperCase()) || producto.marca.includes(buscadorPrductos.value.toUpperCase())),cartasProductos)
        botonComprar(arrayProductosFetch.filter(producto => producto.modelo.includes(buscadorPrductos.value.toUpperCase()) || producto.marca.includes(buscadorPrductos.value.toUpperCase())))
     
     })

}
