export let arrayCarrito = []

export function botonComprar( arrayCosas){//La funcion pisa la clave cuando se navega por el sitio y entonces se resetea el carrito
    arrayCosas.forEach(producto =>{
        document.getElementById(`comprar${producto.id}`).addEventListener("click",() =>{
            arrayCarrito.push(producto)
            localStorage.setItem(`arrayCarrito`, JSON.stringify(arrayCarrito))
            Swal.fire({
                title: `producto agregado al carrito`,
                text: "¿Desea proceder a comprar?",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ir al carrito',
                cancelButtonText:`Seguir comprando`
              }).then((result) => {
                if (result.isConfirmed) {
                  document.location.href="/secciones/carrito.html"
                }
              })
        })
    })
}



