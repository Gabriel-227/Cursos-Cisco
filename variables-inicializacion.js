//La inicialización puede realizarse junto con la declaración o por separado como un comando independiente. Es importante introducir el primer valor en la variable antes de intentar leerla, modificarla o mostrarla.
let  height  =  180;
let  anotherHeight  =  height;
let  weight;
console.log(height);  //  ->  180
console.log(anotherHeight);  //  ->  180
weight  =  70;    
console.log(weight);  //  ->  70

// preste atención a algo. Si especifica el nombre de una variable en console.log, el intérprete la reconoce y muestra su valor. Si escribe el mismo nombre entre comillas, se tratará como texto sin formato y se mostrará como tal.
let height2 = 180;
console.log(height2);  //  ->  180
console.log("height");  //  ->  height

//Declaraciones y modo estricto
//Al comienzo de nuestro código, agregamos"uso estricto";Esta declaración ha cambiado radicalmente el comportamiento del intérprete. ¿Por qué? La usamos cuando queremos forzar al intérprete a comportarse según los estándares modernos de JavaScript.

"use  strict";
   
height  =  180;  //  ->  Uncaught  ReferenceError:  height  is  not  defined
console.log(height);
// En modo estricto, no se permite el uso de variables no declaradas. Si intenta usar una variable que no ha sido declarada previamente, obtendrá un error de referencia. Esto ayuda a evitar errores comunes y a escribir código más seguro y predecible.
// En modo estricto, no se permite el uso de variables no declaradas. Si intenta usar una variable que no ha sido declarada previamente, obtendrá un error de referencia. Esto ayuda a evitar errores comunes y a escribir código más seguro y predecible.

//Cambio de valores de variables

let  steps  =  100;
console.log(steps);  //  ->  100
steps  =  120;  //  ->  120
console.log(steps);
steps  =  steps  +  200;
console.log(steps);  //  ->  320

//Declararemos algunas variables e inicializaremos sus valores con diferentes tipos:
let  greeting  =  "Hello!";
let  counter  =  100;
console.log(greeting);  //  ->  Hello!
greeting = greeting + counter;  //  ->  Hello!100
console.log(greeting);  //  ->  Hello!100