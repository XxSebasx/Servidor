class Medico{
    #nombre;
    constructor(nombre){
        this.#nombre = nombre;
    }
    toString(){
        return this.#nombre;
    }
}

class Departamento{
    #nombre;
    #medicos;
    constructor(nombre,medicos){
        this.#nombre = nombre;
        this.#medicos = medicos;
    }

    getMedicos(){
        return this.#medicos;
    }

    getNumeroMedicos(){
        return this.#medicos.length;
    }

    getNombre(){
        return this.#nombre;
    }

    agregarMedico(medico){
        this.#medicos.push(medico);
    }

    toString(){
        return this.#nombre + " " + this.#medicos.length;
    }
}

class Hospital{
    static tabla = [new Departamento("Cardiología",["Dr martinez"]), new Departamento("Pediatría",["Dr Apolo"])];
    static listarDepartamentos(){
        document.write("<table border= \'1px\' ><tr><th>Nombre</th><th>Medicos</th></tr>");
        Hospital.tabla.forEach(departamento => {
            document.write(`<tr><td>${departamento.getNombre()}</td><td>${departamento.getNumeroMedicos()}</td></tr>`);
        });
    }
}

class Clinica extends Hospital{
    static asignarMedico(departamento, medico){
        Hospital.tabla.forEach(departamentoTabla => {
            if(departamentoTabla.getNombre() == departamento){
                departamentoTabla.agregarMedico(medico);
            }
        });
    }

    static listarMedicos(){
        document.write("<table border= \'1px\' ><tr><th>Nombre</th><th>Medicos</th></tr>" + "<br>")
        Hospital.tabla.forEach(departamento => {
            document.write(`<tr><td>${departamento.getNombre()}</td><td>${departamento.getMedicos().toString()}</td></tr>`);
        });
    }
}

let medico1 = new Medico("Dr. Juan Pérez");
let medico2 = new Medico("Dr. María García");

Clinica.asignarMedico("Cardiología", medico1);
Clinica.asignarMedico("Pediatría", medico2);

Hospital.listarDepartamentos();

Clinica.listarMedicos();


