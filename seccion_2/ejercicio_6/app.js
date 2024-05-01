
// Mostrar "Mensaje 1: Inmediatamente" en la consola.
// Utilizar setTimeout() con un retardo de 0 segundos para mostrar "Mensaje 2: Con timeout de 0 segundos".
// Utilizar otro setTimeout() con un retardo de 1 segundo para mostrar "Mensaje 3: Con timeout de 1 segundo".

// Paso 1: Mostrar "Mensaje 1: Inmediatamente"
console.log("Mensaje 1: Inmediatamente");

// Paso 2: Mostrar "Mensaje 2: Con timeout de 0 segundos" después de 0 segundos
setTimeout(() => {
  console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);

// Paso 3: Mostrar "Mensaje 3: Con timeout de 1 segundo" después de 1 segundo
setTimeout(() => {
  console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);

console.log("Mensaje 4: este deberia imprimir de ultimo");

// ¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?

// Esto se debe a que JavaScript es un lenguaje de programación de un solo subproceso (single-threaded), lo que significa que puede ejecutar solo una tarea a la vez.
// Aunque el retardo de setTimeout es 0, el mensaje "Mensaje 2: Con timeout de 0 segundos" se coloca en la cola de tareas asíncronas y no se ejecuta hasta que todas
// las tareas síncronas se completen y la pila de llamadas esté vacía.

// ¿Qué nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?

// Este comportamiento refleja el funcionamiento del event loop en JavaScript. Las operaciones asíncronas, como las funciones setTimeout,
// se colocan en la cola de tareas después de que todas las operaciones síncronas se completen. JavaScript maneja tanto las macro tareas
// (como el código dentro de setTimeout) como las micro tareas (como las promesas y el método process.nextTick en Node.js) de manera eficiente
// para garantizar la capacidad de respuesta del programa y evitar el bloqueo del hilo de ejecución.