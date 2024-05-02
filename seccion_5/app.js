// Arrays para almacenar datos de habitaciones y reservas
let habitaciones = [];
let reservas = [];

// Cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          habitaciones = data.rooms;
          reservas = []; // Reiniciar el array de reservas al cargar nuevos datos
          console.log("Habitaciones:", habitaciones);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    }, 3000);
  });
}

// Función para verificar disponibilidad de habitaciones
function verificarDisponibilidad(capacidad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const habitacionesDisponibles = habitaciones.filter(
        (habitacion) =>
          habitacion.availability && habitacion.capacity >= capacidad
      );
      if (habitacionesDisponibles.length > 0) {
        resolve(habitacionesDisponibles);
      } else {
        reject("No hay habitaciones disponibles que satisfagan los requisitos.");
      }
    }, 2000);
  });
}

// Función para crear una reserva
function crearReserva(numeroHabitacion, fechaInicio, fechaFin, nombreCompleto, cantidadHuespedes) {
  return new Promise((resolve, reject) => {
    const habitacion = habitaciones.find((habitacion) => habitacion.number === numeroHabitacion);
    if (!habitacion) {
      reject("La habitación seleccionada no existe.");
    } else if (!habitacion.availability) {
      reject("La habitación seleccionada no está disponible.");
    } else {
      const reserva = {
        id: reservas.length + 1,
        roomNumber: numeroHabitacion,
        startDate: fechaInicio,
        endDate: fechaFin,
        guestName: nombreCompleto.toLowerCase(),
        guestCount: cantidadHuespedes
      };
      reservas.push(reserva);
      habitacion.availability = false; // Marcar la habitación como no disponible
      resolve("Reserva creada exitosamente.");
    }
  });
}

// Función para ver reservas actuales del usuario
function verReservas(nombreCompleto) {
  return reservas.filter((reserva) => reserva.guestName === nombreCompleto.toLowerCase());
}

// Función para cancelar reserva
function cancelarReserva(idReserva) {
  const index = reservas.findIndex((reserva) => reserva.id === idReserva);
  if (index !== -1) {
    const habitacion = habitaciones.find((habitacion) => habitacion.number === reservas[index].roomNumber);
    if (habitacion) {
      habitacion.availability = true; // Marcar la habitación como disponible nuevamente
    }
    reservas.splice(index, 1);
    return "Reserva cancelada exitosamente.";
  } else {
    return "No se encontró ninguna reserva con el ID proporcionado.";
  }
}

// Función para editar reserva
function editarReserva(idReserva, nuevaFechaInicio, nuevaFechaFin) {
  const reserva = reservas.find((reserva) => reserva.id === idReserva);
  if (reserva) {
    reserva.startDate = nuevaFechaInicio;
    reserva.endDate = nuevaFechaFin;
    return "Reserva editada exitosamente.";
  } else {
    return "No se encontró ninguna reserva con el ID proporcionado.";
  }
}

// Inicialización de la carga de datos
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    const userInput = prompt(
      "Ingrese el numero de habitacion a reservar: " +
        rooms
          .map((room) => {
            return `\nRoom Number: ${room.number} (${roomTypes.find((type) => type.id === room.roomTypeId).name})`;
          })
          .join(", ")
    );
    const numHabitacion = parseInt(userInput);
    const capacidadHabitacion = rooms.find((room) => room.number === numHabitacion).capacity;
    return verificarDisponibilidad(capacidadHabitacion);
  })
  .then((habitacionesDisponibles) => {
    console.log("Habitaciones disponibles:", habitacionesDisponibles);
    // Continuar con la lógica de reservas
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });
//  Continuar con la lógica de reservas
// .then((habitacionesDisponibles) => {
  console.log("Habitaciones disponibles:", habitacionesDisponibles);
  const userInput = prompt("Ingrese el número de la habitación que desea reservar:");
  const numHabitacionSeleccionada = parseInt(userInput);
  const habitacionSeleccionada = habitacionesDisponibles.find((habitacion) => habitacion.number === numHabitacionSeleccionada);
  if (!habitacionSeleccionada) {
    throw new Error("El número de habitación ingresado no es válido.");
  }
  const fechaInicio = prompt("Ingrese la fecha de inicio de la reserva (YYYY-MM-DD):");
  const fechaFin = prompt("Ingrese la fecha de fin de la reserva (YYYY-MM-DD):");
  const nombreCompleto = prompt("Ingrese su nombre completo:");
  const cantidadHuespedes = parseInt(prompt("Ingrese la cantidad de huéspedes:"));
  return crearReserva(numHabitacionSeleccionada, fechaInicio, fechaFin, nombreCompleto, cantidadHuespedes);
})
.then((mensaje) => {
  console.log(mensaje);
})
.catch((error) => {
  console.error("Error al manejar la promesa:", error);
});
