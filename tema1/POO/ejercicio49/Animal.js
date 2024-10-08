class  Animal {
    static hacerSonido(){};
}

class Perro extends Animal {
    hacerSonido(){
        console.log("Guau guau");
    }
}


class Gato extends Animal {
    hacerSonido(){
        console.log("Miau Miau");
    }
}