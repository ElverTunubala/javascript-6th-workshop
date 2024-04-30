// Función declarada
function funcionDeclarada() {
    console.log("Función declarada fue llamada");
  }
  
  // Intento llamar a la función declarada antes de su declaración
  // Esto funciona debido al concepto de "hoisting"
  funcionDeclarada();
  
  // Función expresada
  var funcionExpresada = function() {
    console.log("Función expresada fue llamada");
  };
  
  // Intento llamar a la función expresada antes de su declaración
  // Esto dará un error ya que las funciones expresadas no son "hoisted"
  // funcionExpresada(); // Descomenta esta línea para ver el error
  
  // Llamando a las funciones después de su declaración
  funcionDeclarada(); // Función declarada fue llamada
  funcionExpresada(); // Función expresada fue llamada


//   la función declarada puede ser llamada antes de su declaración debido al concepto de
//    "hoisting". Sin embargo, la función expresada no puede ser llamada antes de su declaración,
//     ya que no está sujeta al "hoisting".

// ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
// Cuando intentamos llamar a funcionDeclarada antes de su declaración, JavaScript nos permite hacerlo sin lanzar ningún error. Sin embargo, cuando intentamos llamar a funcionExpresada antes de su declaración, JavaScript nos arroja un error indicando que la función no está definida.
// ¿Cómo difieren los resultados entre la función declarada y la función expresada?
// La diferencia principal radica en el concepto de hoisting. Las funciones declaradas son completamente elevadas (hoisted), lo que significa que pueden ser llamadas antes de su declaración en el código y JavaScript las reconocerá. En contraste, las funciones expresadas no son elevadas en su totalidad, solo la declaración de la variable que las contiene lo es. Por lo tanto, intentar llamar a una función expresada antes de su declaración provocará un error.
// ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
// Esto indica que JavaScript trata las funciones declaradas y las funciones expresadas de manera diferente durante el proceso de hoisting. Las funciones declaradas (declarations) se elevan completamente, lo que significa que están disponibles en todo el ámbito en el que están definidas, incluso antes de su declaración en el código. Por otro lado, las funciones expresadas (expressions) solo elevan la declaración de la variable que las contiene, pero la asignación de la función a esa variable no se eleva. Por lo tanto, intentar acceder a la función antes de la asignación provocará un error.
// En resumen, JavaScript maneja las funciones declaradas y las funciones expresadas de manera diferente durante el proceso de hoisting, lo que afecta cómo pueden ser accedidas antes de su declaración en el código.

  