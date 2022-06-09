import {arrayCamaras, arrayCelulares} from "./productos.js";
import {botonComprar} from "./funciones/botonComprar.js"
import { crearCards }  from "./funciones/crearCards.js"
import {buscador,cartasProductos} from "./funciones/buscador.js"
import { crearCarrito, arrayCarritoParseado } from "./funciones/crearCarrito.js";
import { fetchCamaras, fetchCelulares, fetchProductos } from "./funciones/fetch.js";
import { anterior,siguiente } from "./funciones/paginacion.js";


//////////////////////////////////////////////////////////////////////////////////////////////////
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
 

let pageName = document.getElementById("pageName") //INDENTIFICAR PAGINA

//   CREACION DE CARDS




if(pageName.value=="index"){
    //document.body.onload = crearCards(arrayProductos,cartasProductos)
}else if(pageName.value=="celulares"){
    //document.body.onload = crearCards(arrayCelulares,cartasProductos)
}else if(pageName.value=="camaras"){
    document.body.onload = crearCards(arrayCamaras,cartasProductos)
}



//////////////////////////////////////////////////////////////////////////////////////////////////
//   FETCH 


if(pageName.value=="index"){
    fetchProductos()
}else if(pageName.value=="celulares"){
    fetchCelulares()
}else if(pageName.value=="camaras"){
    fetchCamaras()
}




//   FETCH - PAGINACION


if(pageName.value=="index"){
    anterior("index")
    siguiente("index")
    
 }else if(pageName.value=="celulares"){
    anterior("celulares")
    siguiente("celulares")
 }else if(pageName.value=="camaras"){
    anterior("camaras")
    siguiente("camaras")
 }


//////////////////////////////////////////////////////////////////////////////////////////////////

//   EVENTOS - AGREGAR AL CARRITO

if(pageName.value=="index"){
    //console.log(arrayProductosFetch)
    
 }else if(pageName.value=="celulares"){
    //botonComprar(arrayCelulares)
 }else if(pageName.value=="camaras"){
    //botonComprar(arrayCamaras)
 }
 
 //   EVENTOS - MOSTRAR CARRITO
 
 if(pageName.value == "carrito"){
     if(arrayCarritoParseado.length>=1){
         crearCarrito()
     }
 }
 
 //   EVENTOS - BUSCADOR
 

 if(pageName.value=="index"){
     buscador()
 }else if(pageName.value=="celulares"){
     buscador()
 }else if(pageName.value=="camaras"){
     buscador()
 }















