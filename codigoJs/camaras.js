import { crearCards } from "./index.js"
import { arrayCamaras } from "./productos.js"
import {botonComprar} from "./funciones/comprar.js"




//const cartasCamaras = document.getElementById("cartasCamaras")
//const pagCamaras = document.getElementById("camaras")
//pagCamaras.onclick = crearCards(arrayCamaras,cartasProductos)

document.body.onload = crearCards(arrayCamaras,cartasProductos)

botonComprar(arrayCamaras)

//FILTRO POR MARCA -  CAMARAS

const filtroNikon = arrayCamaras.filter((el) => el.marca.includes("NIKON"))
const filtroCanon = arrayCamaras.filter((el) => el.marca.includes("CANON"))
const filtroSony = arrayCamaras.filter((el) => el.marca.includes("SONY"))
//console.log(filtroNikon)

//FILTRO POR PRECIO -  CAMARAS
const filtroCamarasPoco = arrayCamaras.filter((el) => el.precio <= 50000)
const filtroCamaras100000 = arrayCamaras.filter((el) => (el.precio >= 50000) && (el.precio <= 100000))
const filtroCamaras150000 = arrayCamaras.filter((el) => (el.precio >= 100000) && (el.precio <= 150000))
const filtroCamaras200000 = arrayCamaras.filter((el) => (el.precio >= 150000) && (el.precio <= 200000))
const filtroCamaras250000 = arrayCamaras.filter((el) => (el.precio >= 200000) && (el.precio <= 250000))
const filtroCamarasMucho = arrayCamaras.filter((el) => el.precio >= 250000)
//console.log(filtroCamaras150000)

//////////////////////////////////////////////////////////////////////////////////////////////////




