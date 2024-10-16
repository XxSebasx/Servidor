class Producto{
    #nombre;
    #precio;
    constructor(nombre, precio){
        this.#nombre = nombre;
        this.#precio = precio;
    }
}


class Tienda{
    static productos = [new Producto("teclado", 80), new Producto("raton", 30), new Producto("PC",600)];
    static listarProductos(){
        Tienda.productos.forEach(producto => {
            console.log(producto);
        });
    }
}

Tienda.listarProductos();


