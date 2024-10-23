class Animal {
    sonido(){}
}

class Perro extends Animal {
    sonido(){
        document.write("Woof!");
    }
}

class Gato extends Animal {
    sonido(){
        document.write("Meow!");
    }
}

class Refugio{
    #animales
    constructor(){
        this.animales = new Map();
    }
   
    agregarAnimal(nombre, animal){
        if(this.animales.has(nombre)){
            throw new Error(`El animal ${nombre} ya está en uso`);
        }
        this.animales.set(nombre, animal);
    }

    mostrarAnimales(){
        for(let animal of this.animales.values()){
            animal.sonido();
            document.write("<br>");
        }
    }
}

let refugio = new Refugio();
try {
    refugio.agregarAnimal("Perro1", new Perro());
    refugio.agregarAnimal("Perro2", new Perro());
    refugio.agregarAnimal("Gato1", new Gato());
    refugio.agregarAnimal("Gato2", new Gato());
    refugio.mostrarAnimales();
    
} catch (error) {
    console.error(error.message);
}









