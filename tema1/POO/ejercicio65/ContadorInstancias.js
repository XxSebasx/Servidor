class ContadorInstancias{
    static nInstancias = 0;
    constructor(){
        ContadorInstancias.nInstancias++;
    }
    static obtenerNumeroInstancias(){
        return ContadorInstancias.nInstancias;
    }
}

const obj1 = new ContadorInstancias();
const obj2 = new ContadorInstancias();
console.log(ContadorInstancias.obtenerNumeroInstancias()); 


