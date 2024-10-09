class Producto{
    #nombre;
    #precio;
    #categorias;

    constructor(nombre, precio){
        this.#nombre = nombre;
        this.#precio = precio;
        this.#categorias = ["Alimentacion","Limpieza","Higiene","tecnologia"];
    }

    getPrecio(){
        return this.#precio;
    }
}

let producto = new Producto("Pizza",2.54);
let producto2 = new Producto("Champú",2.99);
let producto3 = new Producto("Fregona",54);
let producto4 = new Producto("Jabón",2.5);
let producto5 = new Producto("melon",2.99);

let tienda = [producto,producto2,producto3,producto4,producto5];

let tiendaFiltrada = [];

tienda.forEach(producto => {
    if(producto.getPrecio() > 50){
        tiendaFiltrada.push(producto);
    }
});

console.log(tiendaFiltrada);



