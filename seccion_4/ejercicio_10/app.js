console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
    console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
    console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
    .then(() => {
        setTimeout(() => {
            console.log("Macrotarea (setTimeout) inside Microtarea 1");
            return "from micro 1";
        }, 0);
    })
    .then((message) => {
        console.log("Microtarea 2 (Promesa)");
    });

// Microtarea: Promesa
Promise.resolve()
    .then(() => {
        console.log("Microtarea 3 (Promesa)");
    })
    .then(() => {
        console.log("Microtarea 4 (Promesa)");
    });

console.log("Fin del script");

// ¿Qué tareas se consideran macrotareas y cuáles son microtareas?

// Las macrotareas son tareas de mayor tamaño que se agregan al final del ciclo de eventos del event loop. 
// Ejemplos de macrotareas son las operaciones de entrada/salida (I/O), como setTimeout, setInterval, eventos de usuario, manipulación del DOM, etc.
// Las microtareas son tareas de menor tamaño que se ejecutan después de que se completen las macrotareas actuales y antes de que se realice cualquier 
// repintado del DOM. Ejemplos de microtareas son las promesas (then, catch, finally), process.nextTick en Node.js, y queueMicrotask.

// ¿Cómo se relacionan las macrotareas y microtareas con el event loop?

// Las macrotareas se ejecutan y se eliminan de la cola de tareas del event loop una vez que todas las microtareas se han procesado.
// Las microtareas se ejecutan inmediatamente después de que se resuelvan todas las macrotareas actuales y antes de cualquier repintado del DOM.

// ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?

// Cuando una microtarea genera una nueva macrotarea (como un setTimeout dentro de una promesa), esa macrotarea se agregará a la cola de tareas después 
// de que se hayan procesado todas las microtareas actuales. Esto significa que la nueva macrotarea se ejecutará después de que se completen todas las microtareas existentes,
// pero antes de cualquier repintado del DOM.

// ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?

// Las promesas se resuelven de forma asíncrona y agregan microtareas a la cola de microtareas del event loop. Estas microtareas se ejecutan después de que 
// se resuelvan todas las macrotareas actuales.
// Los setTimeout se utilizan para programar macrotareas después de un cierto intervalo de tiempo.
// Estas macrotareas se agregan a la cola de tareas y se ejecutan después de que se resuelvan todas las microtareas existentes.