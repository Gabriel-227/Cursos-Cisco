/*Pregunta 1
Pregunta 1: Juguemos a la floristería. Declara seis variables, recordando nombrarlas según su propósito:

el precio de una sola rosa (8) y el número de rosas que tienes (70)
el precio de un solo lirio (10) y la cantidad de lirios que tienes (50)
el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)
Ahora declara tres variables, una para cada una de tus rosas, lirios y tulipanes, donde colocarás su precio total. Inserta los valores correspondientes en las variables usando las variables declaradas en el paso anterior. Finalmente, declara una variable donde almacenarás el precio de todas tus flores (de nuevo, usa las variables anteriores para la inicialización). Muestra toda la información del inventario en la consola de la siguiente manera:
Rose – unit price: 8 , quantity: 70 , value: 560
Lily – unit price: 10 , quantity: 50 , value: 500
Tulip – unit price: 2 , quantity: 120 , value: 240
Total: 1300
*/
// let rosePrice = 8;
// let lilyPrice = 10;
// let tulipPrice = 2;

// let numberOfRoses = 70;
// let numberOfLilies = 50;
// let numberOfTulips = 120;

// let rosesValue = rosePrice * numberOfRoses;
// let liliesValue = lilyPrice * numberOfLilies;
// let tulipsValue = tulipPrice * numberOfTulips;

// let total = rosesValue + liliesValue + tulipsValue;
// console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
// console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
// console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);

/*Pregunta 2
Pregunta 2: Modifique el código del ejemplo anterior.

Supongamos que los precios de las flores se mantendrán constantes (no cambiarán). Declare e inicialice las variables restantes como en el ejemplo anterior. Muestre toda la información recopilada en la consola. Ahora, reduzca el número de rosas en 20 y el de lirios en 30.

Mostrar nuevamente toda la información recopilada en la consola. */
const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

/* Nuestra tarea consistirá en crear una lista de contactos. Inicialmente, la lista será bastante sencilla: solo añadiremos tres personas usando los datos que se muestran en la tabla a continuación. En el resto del curso, volverás a este script y lo ampliarás sistemáticamente con nuevas funciones, utilizando los elementos de JavaScript recién aprendidos.*/

// Declaramos todas las variables
let nombre1 = "Maxwell Wright";
let telefono1 = "(0191) 719 6495";
let correo1 = "Curabitur.egestas.nunc@nonummyac.co.uk";

let nombre2 = "Raja Villarreal";
let telefono2 = "0866 398 2895";
let correo2 = "posuere.vulputate@sed.com";

let nombre3 = "Helen Richards";
let telefono3 = "0800 1111";
let correo3 = "libero@convallis.edu";

// Mostramos en consola
console.log(`${nombre1}/${telefono1}/${correo1}`);
console.log(`${nombre3}/${telefono3}/${correo3}`);
