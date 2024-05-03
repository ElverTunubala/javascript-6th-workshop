function crearContador() {
    let contador = 0;
  
    function incrementar() {
      contador++;
    }
  
    function obtenerValorActual() {
      return contador;
    }

    return {
      incrementar: incrementar,
      obtenerValorActual: obtenerValorActual,
    };
  }
  
  const contador = crearContador();
  
  // Interfaz para que el usuario interactúe con el contador
  let continuar = true;
  while (continuar) {
    const opcion = prompt("¿Desea incrementar el contador? (Sí/No)");
  
    if (opcion.toLowerCase() === "si") {
      contador.incrementar();
      console.log("El valor actual del contador es:", contador.obtenerValorActual());
    } else if (opcion.toLowerCase() === "no") {
      continuar = false;
    } else {
      console.log("Opción inválida. Por favor, responda 'Sí' o 'No'.");
    }
  }

  console.log("Fin del programa.");


// la función crearContador() devuelve un objeto con dos métodos: incrementar() y obtenerValorActual(). Estos métodos tienen acceso al contador dentro del closure,
// lo que significa que pueden modificar y acceder a su valor interno incluso después de que la función crearContador() haya terminado de ejecutarse.

// La interfaz simple permite al usuario interactuar con el contador utilizando un bucle while y prompts para solicitar su entrada.
// El programa incrementará el contador si el usuario elige "Sí" y mostrará el valor actual del contador en la consola.
// El bucle continuará hasta que el usuario elija "No".