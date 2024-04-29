// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);

// Interacción del Usuario
var respuestaGlobal = prompt("¿Es posible acceder a la variable globalVariable? (Sí/No)");
var respuestaLocal = prompt("¿Es posible acceder a la variable functionVariable? (Sí/No)");
var respuestaBloque = prompt("¿Es posible acceder a la variable blockVariable? (Sí/No)");

// Validación de Respuestas
if (respuestaGlobal.toLowerCase() === "si") {
  console.log("Respuesta para globalVariable: Correcta.");
} else {
  console.log("Respuesta para globalVariable: Incorrecta. La variable globalVariable es accesible desde cualquier parte del código.");
}

if (respuestaLocal.toLowerCase() === "si") {
  console.log("Respuesta para functionVariable: Correcta.");
} else {
  console.log("Respuesta para functionVariable: Incorrecta. La variable functionVariable solo es accesible dentro de la función testScope().");
}

if (respuestaBloque.toLowerCase() === "no") {
  console.log("Respuesta para blockVariable: Correcta.");
} else {
  console.log("Respuesta para blockVariable: Incorrecta. La variable blockVariable solo es accesible dentro del bloque if dentro de la función testScope().");
}
