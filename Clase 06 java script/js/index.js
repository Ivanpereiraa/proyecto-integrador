console.log("¿Funciona?");

// Definición de variables y constantes
let firstName = "Ivan";
let lastName = "Pereira Aragon";
let fullName = firstName + " " + lastName;
let edad = 18;
let movies = ['cars 1', 'shrek 1', 'star wars 1', 'toy story 1'];
let learningJS = false;
let career = "Administración de Empresas";
const university = "UdeSA";
let personalInfo;

// Mostrar las variables en la consola
console.log(firstName);
console.log(lastName);
console.log(fullName);
console.log(edad);
console.log(movies);
console.log(learningJS);
console.log(career);
console.log(university);
console.log(personalInfo);

// Modificación de valores de las variables
learningJS = true;
career = "Negocios Digitales";  // Corrección: Se actualiza el valor de "career" a "Negocios Digitales".

console.log(career, university, learningJS);

// Manipulación del array de películas
movies.pop(); // Eliminar el último elemento del array "movies" (toy story 1).
console.log(movies); // Mostrar el array actualizado

movies.push('Shrek 2', 'Toy story 2');  // Agregar 2 nuevas películas al array "movies".
console.log(movies);  // Mostrar el array actualizado