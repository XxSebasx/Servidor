// Define un objeto "persona" que tiene un array de hobbies

class Persona {
  nombre;
  edad;
  hobbies;
  nTelefonos;
  constructor(nombre, edad, hobbies,nTelefonos) {
    this.nombre = nombre;
    this.edad = edad;
    this.hobbies = hobbies;
    this.nTelefonos = [];
  }

  agregarTelefono(telefono) {
    this.nTelefonos.push(telefono);
  }
} 


mishobbies=["leer", "fútbol", "videojuegos"];
//juan= new Persona("Juan",30, ["leer", "fútbol", "videojuegos"]);
juan= new Persona("Juan",30, mishobbies);
mishobbies.push("andar");




// 1. Agrega un nuevo hobby al array de hobbies
mishobbies.push("cine");

// 2. Elimina el primer hobby del array
mishobbies.shift();


// 3. Imprime todos los hobbies en la consola utilizando un bucle forEach
mishobbies.forEach(hobbie => {
    console.log(hobbie);
});

// 4. Añade otro atributo al objeto "persona" que sea un array de números de teléfono
juan.agregarTelefono("123456789");
juan.agregarTelefono("987654321");


// 5. Imprime el segundo número de teléfono en la consola

console.log(juan.nTelefonos[1]);
