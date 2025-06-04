console.log("Hello, Gabriel!");

//Pregunta 1: Úselo console.logpara mostrar su nombre completo en la consola.
console.log("Gabriel")
// Pregunta 2: Muestre su edad en la consola.
console.log("1542");
//Pregunta 3: Intente nuevamente indicar su año de nacimiento, esta vez pasando la fecha sin las comillas.
console.log(1542);
//Pregunta 4: Podemos pasar varios argumentos aconsola.logseparados por comas, por ejemplo: 
//Envíe información sobre usted a la consola en el formato:Nombre Apellido (Año)p. ej. María Estuardo (1542) .

// dando toda la información como un solo argumento;
// dando el nombre, apellido y año como argumentos separados.
console.log("abc", "def", "ghi");

console.log("Mary Stuart (1542)");
console.log("Mary", "Stuart", "(1542)");
//Pregunta 5: Envíe la misma información (nombre, apellido, año) a la consola, no una al lado de la otra, sino en líneas consecutivas.
console.log("Mary");
console.log("Stuart");
console.log("(1542)");
//Pregunta 6: Una cadena se puede concatenar utilizando el+señal, por ejemplo"abecedario" + "def"será tratado como"abcdef"Intente escribir nuevamente su nombre, apellido y año de nacimiento en una línea, esta vez no separados por comas, sino por+señales.
console.log("Mary" + "Stuart" + "(1542)");
//Pregunta 7: Coloque espacios en los lugares apropiados, de modo que cuando se muestren, obtenga el mismo efecto que en la Pregunta 4 .
console.log("Mary" + "Stuart" + "(1542)");

// VARIABLES VAR - LET
var height;
console.log(height); // undefined
console.log(wight); // Uncaught ReferenceError: width is not defined

// Let- let impide declarar otra variable con el mismo nombre (se genera un error).
let width;
console.log(width); // undefined

let height;
let height; // Uncaught SyntaxError: Identifier 'height' has already been declared
console.log(height);

// Var  Usar var permite volver a declarar una variable, lo que podría provocar errores en la ejecución del programa.
var height;
var height;
console.log(height); // undefined