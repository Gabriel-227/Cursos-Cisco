"use strict";
// En JavaScript, las constantes se declaran utilizando la palabra clave `const`. A diferencia de las variables declaradas con `let` o `var`, las constantes no pueden ser reasignadas una vez que se les ha asignado un valor inicial. Esto significa que una constante debe ser inicializada en el momento de su declaración y no puede cambiar su valor posteriormente.
//Las constantes también se utilizan para almacenar ciertos valores, pero una vez introducidos durante la inicialización, ya no se pueden modificar.
const  greeting2  =  "Hello!";

//Pero el siguiente definitivamente causa un error:
//const  greeting2;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration
//greeting2  =  "Hello!";