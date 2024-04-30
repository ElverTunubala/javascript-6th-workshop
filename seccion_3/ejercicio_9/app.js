// Función para mostrar un mensaje después de un intervalo de tiempo dado
function mostrarMensajeDespuesDeTiempo(tiempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("¡Mensaje mostrado después de " + tiempo + " segundos!");
      }, tiempo * 1000);
    });
  }
  
  // Solicitar al usuario que ingrese el tiempo en segundos
  const tiempoSegundos = parseInt(prompt("Ingrese el tiempo en segundos para mostrar el mensaje después:"));
  
  // Usar la función para mostrar el mensaje después del tiempo dado
  mostrarMensajeDespuesDeTiempo(tiempoSegundos)
    .then((mensaje) => {
      console.log(mensaje);
      // Usar fetch para cargar datos de la URL proporcionada
      return fetch('https://jsonplaceholder.typicode.com/posts');
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ocurrió un error al cargar los datos.');
      }
      return response.json();
    })
    .then(data => {
      console.log("Datos cargados correctamente:");
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
  