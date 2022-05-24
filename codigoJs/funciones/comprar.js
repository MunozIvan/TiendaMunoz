

let arrayCarrito = []

export function botonComprar( arrayCosas){//La funcion pisa la clave cuando se navega por el sitio y entonces se resetea el carrito
    arrayCosas.forEach(producto =>{
        document.getElementById(`comprar${producto.id}`).addEventListener("click",() =>{
            arrayCarrito.push(producto)
            localStorage.setItem(`arrayCarrito`, JSON.stringify(arrayCarrito))
            
        })
    })
    
}



