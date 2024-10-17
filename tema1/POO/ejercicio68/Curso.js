class Persona{
    #nombre;
    #edad;
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    get nombre(){
        return this.#nombre;
    }
    toString(){
        return `${this.#nombre} - ${this.#edad} años`;
    }
}
class Inscripcion{
    #persona;
    #nombreCurso;
    constructor(persona, nombreCurso){
        this.#persona = persona;
        this.#nombreCurso = nombreCurso;
    }
    getpersona(){
        return this.#persona;
    }
    getnombreCurso(){
        return this.#nombreCurso;
    }

    toString(){
        return this.#persona.toString();
    }
}

class Curso{
    #nombre;
    #duracion;
    #precio;
    #inscripciones;
    static cursos = [new Curso ("JavaScript Avanzado",4,200),new Curso("Node.js Básico",3,150)];
    constructor(nombre, duracion, precio){
        this.#nombre = nombre;
        this.#duracion = duracion;
        this.#precio = precio;
        this.#inscripciones = [];
    }

    getNombre(){
        return this.#nombre;
    }
    getDuracion(){
        return this.#duracion;
    }
    getPrecio(){
        return this.#precio;
    }
    getInscripciones(){
        return this.#inscripciones
    }
    static listarCursos(){
        document.write("<table border= \'1px\' ><tr><th>Nombre</th><th>Duración</th><th>Precio</th><th>Inscritos</th></tr>");
        Curso.cursos.forEach(curso => {
            document.write(`<tr><td>${curso.getNombre()}</td><td>${curso.getDuracion()} horas</td><td>${curso.getPrecio()}</td>
            <td>${curso.getInscripciones().toString()}</td></tr>`);
        });
    }

    static inscribir(inscripcion){
       Curso.cursos.forEach(curso => {
            if(curso.getNombre() == inscripcion.getnombreCurso()){
                curso.getInscripciones().push(inscripcion);  
            }
       });
    }
}


let persona1 = new Persona("Juan",25);
let persona2 = new Persona("Maria",30);
let persona3 = new Persona("Sebastian",21);
let inscripcion1 = new Inscripcion(persona1, "JavaScript Avanzado");
let inscripcion2 = new Inscripcion(persona2, "Node.js Básico");
let inscripcion3 = new Inscripcion(persona3, "Node.js Básico");
Curso.inscribir(inscripcion1);
Curso.inscribir(inscripcion2);
Curso.inscribir(inscripcion3);
Curso.listarCursos();