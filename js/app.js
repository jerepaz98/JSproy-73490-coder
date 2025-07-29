//Inicialización del gestor de turnos
const form = document.getElementById("formTurno")
const listaTurnos = document.getElementById("listaTurnos")

let turnos = JSON.parse(localStorage.getItem("turnos")) || []

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const nombre = document.getElementById("nombre").value
  const email = document.getElementById("email").value
  const fecha = document.getElementById("fecha").value
  const hora = document.getElementById("hora").value

  if (!email.endsWith("@gmail.com")) {
    alert("Solo se aceptan correos de Gmail.")
    return
  }

  const nuevoTurno = { nombre, email, fecha, hora }
  turnos.push(nuevoTurno)
  localStorage.setItem("turnos", JSON.stringify(turnos))
  form.reset()
  mostrarTurnos()
})

function mostrarTurnos() {
  listaTurnos.innerHTML = ""
  turnos.forEach((turno, index) => {
    const div = document.createElement("div")
    div.classList.add("turno")
    div.innerHTML = `
      <p><strong>${turno.nombre}</strong> - ${turno.email}</p>
      <p>${turno.fecha} a las ${turno.hora}</p>
      <button onclick="eliminarTurno(${index})">Eliminar</button>
    `
    listaTurnos.appendChild(div)
  })
}

function eliminarTurno(index) {
  turnos.splice(index, 1)
  localStorage.setItem("turnos", JSON.stringify(turnos))
  mostrarTurnos()
}

mostrarTurnos()
