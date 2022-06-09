

class producto{
    constructor(id,modelo, marca, precio, stock,foto,tipo,ventas){
        this.id= id;
        this.modelo = modelo;
        this.marca = marca.toUpperCase();
        this.precio = new Intl.NumberFormat().format(precio);
        this.stock = stock;
        this.foto = foto;
        this.tipo = tipo.toUpperCase();
        this.ventas = ventas
    }
}

//      CELULARES
const celu2 = new producto(2,"Samusung Galaxy Z Flip 3", "Samsung", 154999.00, 50, "/imagenes/celu2.png","celular")
const celu3 = new producto(3,"Apple Iphone 13 mini", "Apple", 247999.00, 50, "/imagenes/celu3.png","celular")
const celu4 = new producto(4,"Samusung Galaxy S22 Ultra", "Samsung", 229999.00, 50, "/imagenes/celu4.png","celular")
const celu5 = new producto(5,"Samusung Galaxy A53 5G", "Samsung",83999.00, 50, "/imagenes/celu5.png","celular")
const celu6 = new producto(6,"Motorola Edge 20 lite", "Motorola",77999.00, 50, "/imagenes/celu6.png","celular")
const celu7 = new producto(7,"Motorola Moto e40", "Motorola",33999.00, 50, "/imagenes/celu7.png","celular")
const celu8 = new producto(8,"Samusung Galaxy S21 FE", "Samsung",129999.00, 50, "/imagenes/celu8.png","celular")
const celu9 = new producto(9,"Motorola Moto g200", "Motorola",99999.00, 50, "/imagenes/celu9.png","celular")
const celu10 = new producto(10,"Motorola Moto g41", "Motorola",49999.00, 50, "/imagenes/celu10.png","celular")

//      CAMARAS
const camara1 = new producto(11,"Canon EOS Rebel Kit T100", "Canon",112999.00, 50, "/imagenes/camara1.png","camara")
const camara2 = new producto(12,"Nikon Coolpix B B500 compacta avanzada", "Nikon",84527.00, 50, "/imagenes/camara2.png","camara")
const camara3 = new producto(13,"Canon EOS Kit M200 + lente 15-45mm", "Canon",127999.00, 50, "/imagenes/camara3.png","camara")
const camara4 = new producto(14,"Sony DSC-H300", "Sony",63255.00, 50, "/imagenes/camara4.png","camara")
const camara5 = new producto(15,"Sony DSC-W830 compacta", "Sony",23998.00, 50, "/imagenes/camara5.png","camara")
const camara6 = new producto(16,"Nikon Reflex D3500 18-55mm", "Nikon",224795.00, 50, "/imagenes/camara6.png","camara")
const camara7 = new producto(17,"Nikon Reflex D5600 18-55mm", "Nikon",242779.00, 50, "/imagenes/camara7.png","camara")
const camara8 = new producto(18,"Nikon Z50 Body 20.9mp 4k mirrorless", "Nikon",286614.00, 50, "/imagenes/camara8.png","camara")
const camara9 = new producto(19,"Nikon Kit D7500 + lente 18-140mm ED VR DSLR", "Nikon",424863.00, 50, "/imagenes/camara9.png","camara")

let arrayCamaras = [camara1,camara2,camara3,camara4,camara5,camara6,camara7,camara8,camara9]


let arrayCelulares = [celu2,celu3,celu4,celu5,celu6,celu7,celu8,celu9,celu10]

let arrayProductos = arrayCelulares.concat(arrayCamaras)




//////////////////////////////////////////////////////////////////////////////////////////////////
//                       REEMPLAZADO POR FETCH 
//////////////////////////////////////////////////////////////////////////////////////////////////


export{arrayCamaras,arrayCelulares,arrayProductos}




