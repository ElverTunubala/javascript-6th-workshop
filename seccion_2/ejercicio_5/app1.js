
// Para manejar tanto la resolución como el rechazo de la promesa en la función manejarAsincronia,
//  podemos simplemente agregar un método catch a la promesa dentro de la función. 
//  Este método capturará cualquier error que ocurra durante la ejecución de la
//  promesa y llamará al callback con el mensaje correspondiente.


// Modificación de la función manejarAsincronia para manejar tanto resolución como rechazo de la promesa
function manejarAsincronia(callback, promesa) {
    // Crear la promesa que se resuelve o rechaza después de cierto tiempo
    const miPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulando una resolución exitosa con una probabilidad del 70%
        if (Math.random() < 0.7) {
          resolve("¡Promesa cumplida!");
        } else {
          reject("¡Promesa rechazada!");
        }
      }, 2000); 
    });
  
    // Ejecutar el callback dependiendo de si la promesa se resuelve o se rechaza
    miPromesa
      .then((mensaje) => {
        callback("Resolución: " + mensaje);
      })
      .catch((error) => {
        callback("Rechazo: " + error);
      });
  }

  const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulando una resolución exitosa con una probabilidad del 70%
      if (Math.random() < 0.7) {
        resolve("¡Promesa cumplida!");
      } else {
        reject("¡Promesa rechazada!");
      }
    }, 2000); 
  });

  // Invocar la función con un callback y la promesa creada
  manejarAsincronia((mensaje) => {
    console.log(mensaje);
  }, miPromesa); // Puedes pasar una promesa existente o crear una nueva aquí
  

//  Con esta modificación, el callback ahora recibirá un mensaje indicando si la promesa
//  fue resuelta exitosamente o rechazada, y mostrará un mensaje adecuado en la consola 
//  dependiendo del resultado.

