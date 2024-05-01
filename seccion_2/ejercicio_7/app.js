// console.log("inicio");

// setTimeout(() => {
//   console.log("primer");
// }, 0);

// setTimeout(() => {
//   console.log("segundo");
// }, 0);

// Promise.resolve("promesa ").then(console.log);

// console.log("fin");

// Pide al usuario que prediga el orden de los mensajes en consola
var predicciones = [
  "inicio",
  "fin",
  "promesa",
  "primer",
  "segundo"
];

var respuestaUsuario = prompt("Predice el orden en que se mostrarán los mensajes en consola, separados por comas:");

// Divide la respuesta del usuario en un array
var respuestaUsuarioArray = respuestaUsuario.split(",").map(item => item.trim());

// Muestra el resultado que ingreso el usuario.
console.log("Tus respuestas:");
console.log(respuestaUsuarioArray.join("\n"));

for (var i = 0; i < predicciones.length; i++) {
  if (predicciones[i] == respuestaUsuarioArray[i]) {
    continue;
  }else{
    console.log("Lo siento, en la posicion"+" "+(i+1)+" "+"debe imprimir la palabra " + predicciones[i]);
  }
}

// Compara la respuesta del usuario con el orden real
var errores = 0;
for (var i = 0; i < predicciones.length; i++) {
  if (predicciones[i] !== respuestaUsuarioArray[i]) {
    errores++;
  }
}

// Muestra el resultado real y verifica las respuestas del usuario
console.log("Orden real de los mensajes:");
console.log(predicciones.join("\n"));

if (errores === 0) {
  console.log("¡Felicitaciones! Acertaste el orden de los mensajes en consola.");
} else if (errores === 1) {
  console.log("Lo siento, cometiste un error en tu predicción.");
  console.log("Explicación: Solo un paso está fuera de lugar.");
} else {
  console.log("Lo siento, cometiste varios errores en tu predicción.");
  console.log("Explicación: Más de un paso está fuera de lugar.");
}

// Este script mostrará al usuario el código dado y le pedirá que prediga el orden en que
// se mostrarán los mensajes en la consola. Luego, comparará la respuesta del usuario con
// el orden real y proporcionará retroalimentación en función de la precisión de la predicción.