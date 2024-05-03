// Ruta del archivo data.json
const url = "./data.json" //  ruta del archivo json
console.log(url);
let inicioReserva=true
// let datosCargados = cargarYMostrarData()

cargarYMostrarData().then(() => {

  while (inicioReserva) {
    respuestaUsuario = prompt("1.Realizar una reserva\n2.Verificar habitaciones disponibles\n3.Ver mis reservas\n4.Canclelar reserva").toLocaleLowerCase();

    if (respuestaUsuario == "1") {
      const nombreCompleto = prompt("Ingrese su nombre completo:");
      const numeroHabitacion = parseInt(prompt("Ingrese el número de la habitación que desea reservar:"));
      const fechaInicio = prompt("Ingrese la fecha de inicio de la reserva (YYYY-MM-DD):");
      const fechaFin = prompt("Ingrese la fecha de fin de la reserva (YYYY-MM-DD):");
      const cantidadHuespedes = parseInt(prompt("Ingrese la cantidad de huéspedes:"));
      crearReserva(numeroHabitacion, fechaInicio, fechaFin, nombreCompleto, cantidadHuespedes);

    }else if(respuestaUsuario == "2"){
      verHabitacionesDisponibles()

    }else if(respuestaUsuario == "3"){
      let nombre= prompt("Ingrese el nombre completo")
      verReservas(nombre)
    }
    else{
      inicioReserva=false;
    }
  }

}).catch((error) =>{
  console.error("Error al entrar al ciclo:", error);
})

// Variables para almacenar los datos
let habitaciones = [];
let tiposHabitacion = [];
let reservas = [];


// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          
          // Almacenar los datos cargados en las variables correspondientes
          habitaciones = data.rooms;
          habitacionesDisponibles=data.rooms;
          tiposHabitacion = data.roomTypes;
          resolve(); // Resuelve la promesa después de cargar los datos
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

// Función para crear una reserva
function crearReserva(numeroHabitacion, fechaInicio, fechaFin, nombreCompleto, cantidadHuespedes) {
  // Verificar disponibilidad de la habitación
  const habitacion = habitaciones.find((room) => room.number === numeroHabitacion);
  if (!habitacion || !habitacion.availability) {
    throw new Error("La habitación seleccionada no está disponible.");
  }
  // Verificar capacidad de la habitación
  const tipoHabitacion = tiposHabitacion.find((type) => type.id === habitacion.roomTypeId);
  console.log("este es el tipo de habitacion: "+tipoHabitacion)
  if (!tipoHabitacion || cantidadHuespedes > tipoHabitacion.capacity) {
    throw new Error("La habitación no tiene suficiente capacidad para la cantidad de huéspedes.");
  }
  // Generar un ID único para la reserva
  const reservaId = generarIdUnico();
  // Crear objeto de reserva
  const reserva = {
    id: reservaId,
    numeroHabitacion: numeroHabitacion,
    fechaInicio: fechaInicio,
    fechaFin: fechaFin,
    nombreCompleto: nombreCompleto.toLowerCase(),
    cantidadHuespedes: cantidadHuespedes
  };
  // Agregar reserva al array de reservas
  reservas.push(reserva);
  // Actualizar disponibilidad de la habitación
  habitacion.availability = false;
  console.log("Reserva creada:", reserva);
  return reservaId;
}

// Función para generar un ID único para la reserva
function generarIdUnico() {
  return Math.random().toString(36).substr(2, 9);
}
// Función para ver las habitaciones disponibles
function verHabitacionesDisponibles(){
  const habitacionesDisponibles = habitaciones.filter((room) => room.availability);
  console.log("Habitaciones disponibles:");
  habitacionesDisponibles.forEach((room) => {
    console.log("Número:", room.number);
  });
}
// Función para ver las reservas actuales del usuario
function verReservas(nombreCompleto) {
  const reservasUsuario = reservas.filter((reserva) => reserva.nombreCompleto === nombreCompleto.toLowerCase());
  console.log("Reservas de", nombreCompleto + ":");
  reservasUsuario.forEach((reserva) => {
    console.log("ID:", reserva.id);
    console.log("Habitación:", reserva.numeroHabitacion);
    console.log("Fecha de inicio:", reserva.fechaInicio);
    console.log("Fecha de fin:", reserva.fechaFin);
    console.log("Cantidad de huéspedes:", reserva.cantidadHuespedes);
    console.log("--------------------");
  });
}

// Función para cancelar una reserva
function cancelarReserva(idReserva) {
  const indiceReserva = reservas.findIndex((reserva) => reserva.id === idReserva);
  if (indiceReserva !== -1) {
    const reservaCancelada = reservas.splice(indiceReserva, 1)[0];
    const habitacion = habitaciones.find((room) => room.number === reservaCancelada.numeroHabitacion);
    habitacion.availability = true; // Restaurar disponibilidad de la habitación
    console.log("Reserva cancelada:", reservaCancelada);
  } else {
    console.log("No se encontró ninguna reserva con el ID:", idReserva);
  }
}

// Función para editar una reserva
function editarReserva(idReserva, nuevaFechaInicio, nuevaFechaFin) {
  const reserva = reservas.find((reserva) => reserva.id === idReserva);
  if (reserva) {
    reserva.fechaInicio = nuevaFechaInicio;
    reserva.fechaFin = nuevaFechaFin;
    console.log("Reserva editada:", reserva);
  } else {
    console.log("No se encontró ninguna reserva con el ID:", idReserva);
  }
}

// Llamar a la función para cargar y mostrar el contenido de data.json
// cargarYMostrarData()
//   .then(() => {
//     

//     cancelarReserva(idReserva);
//     verReservas(nombreCompleto);
//     editarReserva(idReserva, "2024-05-01", "2024-05-05");
//     verReservas(nombreCompleto);
//   })
//   .catch((error) => {
//     console.error("Error al manejar la promesa:", error);
//   });
