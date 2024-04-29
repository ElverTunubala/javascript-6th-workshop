// Creación de la Función con Closure
function crearSumador(num) {
    return function(sumando) {
      return num + sumando;
    };
  }
  
  // 3.2 Uso de la Función y Observación de Closures
  const sumarCinco = crearSumador(5);
  const resultado = sumarCinco(3);
  
  // 3.3 Ejecución y Análisis
  console.log("Resultado de sumarCinco(3):", resultado);

//  ¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
// Esto se logra mediante el mecanismo de closures en JavaScript. Cuando una función interna hace referencia a variables de una función externa, 
// el motor de JavaScript mantiene un vínculo a esas variables incluso después de que la función externa haya completado su ejecución. 
// Esto permite que la función interna acceda y utilice esas variables en su scope.

// ¿Cuáles son las implicaciones de memo?
// Los closures pueden ser útiles para implementar el patrón de memoización, donde una función recuerda los resultados de las llamadas anteriores para evitar tener que
// recalcularlos. Esto puede mejorar significativamente el rendimiento en funciones costosas computacionalmente, ya que si se llama con los mismos argumentos, 
// en lugar de recalcular el resultado, simplemente se devuelve el valor previamente calculado desde el closure.