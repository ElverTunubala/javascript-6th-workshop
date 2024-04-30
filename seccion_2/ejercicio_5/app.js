// 5.1: función manejarAsincronia
function manejarAsincronia(callback, promesa) {

    // 5.2: esta la promesa que se resuelve después de 2 segundos
    const miPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000); // Cambiar a 5000 = 5 segundos o a 1000 = 1 segundo
    });
  
    // 5.3: Ejecutar el callback después de que la promesa se resuelva
    miPromesa.then(() => {
      callback("¡Promesa cumplida y callback ejecutado!");
    }).catch((error) => {
      callback("¡Promesa rechazada! Error: " + error);
    });
  }
  const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 9000); // Cambiar a 5000 = 5 segundos o a 1000 = 1 segundo
  });

  // 5.4: Invocar la función
  manejarAsincronia((mensaje) => {
    console.log(mensaje);
  }, miPromesa); // se puede pasar una promesa existente o crear una nueva aquí
  
  // 5.5: 
  // - ¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
  // La promesa se resolverá después del tiempo especificado (en milisegundos). Si es 5 segundos, tomará más tiempo en ejecutarse, mientras que si es 1 segundo,
  // será más rápido.
  
  // - ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
  // Si la promesa es rechazada, se ejecutará el método catch y el callback recibirá un mensaje indicando que la promesa fue rechazada, junto con el error.
  
  // - ¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
  // Sí, como se muestra en el código, el callback maneja diferentes mensajes dependiendo de si la promesa se resuelve o se rechaza.
  
  