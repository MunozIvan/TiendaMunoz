import { crearCards } from "./index.js"
import { arrayCelulares } from "./productos.js"
import {botonComprar} from "./funciones/comprar.js"


//const cartasCelulares = document.getElementById("cartasCelulares")
//const pagCelulares = document.getElementById("celulares")
//pagCelulares.onclick = crearCards(arrayCelulares,cartasProductos)


document.body.onload = crearCards(arrayCelulares,cartasProductos)

botonComprar(arrayCelulares)


//FILTRO POR MARCA -  CELULARES

const filtroSamsung = arrayCelulares.filter((el) => el.marca.includes("SAMSUNG"))
const filtroApple = arrayCelulares.filter((el) => el.marca.includes("APPLE"))
const filtroMotorola = arrayCelulares.filter((el) => el.marca.includes("MOTOROLA"))
//console.log(filtroSamsung)

//FILTRO POR PRECIO -  CELULARES

const filtroCelularesPoco = arrayCelulares.filter((el) => el.precio <= 50000)
const filtroCelulares100000 = arrayCelulares.filter((el) => (el.precio >= 50000) && (el.precio <= 100000))
const filtroCelulares150000 = arrayCelulares.filter((el) => (el.precio >= 100000) && (el.precio <= 150000))
const filtroCelulares200000 = arrayCelulares.filter((el) => (el.precio >= 150000) && (el.precio <= 200000))
const filtroCelulares250000 = arrayCelulares.filter((el) => (el.precio >= 200000) && (el.precio <= 250000))
const filtroCelularesMucho = arrayCelulares.filter((el) => el.precio >= 250000)
//console.log(filtroCelulares150000)

////////////////////////////////////////////