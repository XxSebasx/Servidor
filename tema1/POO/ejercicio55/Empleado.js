class Empleado{
    #nombre;
    #precio;
    #departamento;
    constructor(nombre, precio, departamento){
        this.#nombre = nombre;
        this.#precio = precio;
        this.#departamento = departamento;
    }

    getSueldo(){
        return this.#precio;
    }

    getNombre(){
        return this.#nombre;
    }

    getDepartamento(){
        return this.#departamento;
    }

    setPrecio(precio){
        this.#precio = precio;
    }


}

let empleado1 = new Empleado("Sebastian",100,"tecnologia");
let empleado2 = new Empleado("Manuel",200,"ventas");
let empleado3 = new Empleado("Juan",300,"ventas");

let array = [empleado1, empleado2, empleado3];

array.forEach(empleado => {
    if(empleado.getDepartamento() == "ventas"){
        empleado.setPrecio(empleado.getSueldo() + (empleado.getSueldo() * 0.1));
    }
});

console.log(array[1]);

